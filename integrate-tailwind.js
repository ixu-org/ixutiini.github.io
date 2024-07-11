const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to run shell commands
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Main function to integrate TailwindCSS
async function integrateTailwind() {
  try {
    // Get the path to the Chirpy theme
    const chirpyPath = (await runCommand('bundle show jekyll-theme-chirpy')).trim();
    const chirpyScssPath = path.join(chirpyPath, 'assets', 'css', 'jekyll-theme-chirpy.scss');
    const chirpyMainScssPath = path.join(chirpyPath, '_sass', 'main.scss');

    // Read the existing SCSS file
    let scssContent = fs.readFileSync(chirpyScssPath, 'utf-8');

    // Append Tailwind imports if they are not already present
    if (!scssContent.includes('@import "tailwindcss/base";')) {
      scssContent += `
/* Tailwind CSS */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Custom styles */
      `;
      fs.writeFileSync(chirpyScssPath, scssContent);
    }

    console.log('TailwindCSS imports added to jekyll-theme-chirpy.scss');

    // Write the Tailwind input CSS
    const tailwindInputCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;
    `;
    fs.writeFileSync('./assets/css/tailwind-input.css', tailwindInputCss);

    // Build TailwindCSS
    await runCommand('npx tailwindcss -i ./assets/css/tailwind-input.css -o ./assets/css/dist-style.css');

    // Read the generated TailwindCSS
    const tailwindCss = fs.readFileSync('./assets/css/dist-style.css', 'utf-8');

    // Merge the TailwindCSS with Chirpy styles
    const mainScssContent = fs.readFileSync(chirpyMainScssPath, 'utf-8');
    const mergedCss = mainScssContent + '\n' + tailwindCss;
    fs.writeFileSync('./assets/css/main.css', mergedCss);

    console.log('TailwindCSS merged with Chirpy styles');
  } catch (error) {
    console.error(error);
  }
}

// Run the integration process
integrateTailwind();

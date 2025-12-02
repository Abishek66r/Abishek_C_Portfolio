const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src/assets');
const projectsDir = path.join(assetsDir, 'projects');

const images = [
  path.join(assetsDir, 'Abi.png'),
  path.join(assetsDir, 'abi_nobg.png'),
  path.join(assetsDir, 'Abi_blackandWhite.png'),
  path.join(assetsDir, 'AK.png'),
  path.join(projectsDir, 'Gemini_Generated_Image_bwmd4sbwmd4sbwmd.png'),
  path.join(projectsDir, 'Lucid_Origin_A_project_management_dashboard_with_task_boards_k_1.jpg'),
  path.join(projectsDir, 'Lucid_Origin_A_modern_learning_management_system_dashboard_UI__2.jpg'),
  path.join(projectsDir, 'Lucid_Origin_A_realtime_chat_interface_with_message_bubbles_ty_3.jpg')
];

images.forEach((input) => {
  const output = input.replace(/\.(png|jpg|jpeg)$/, '.webp');
  let sharpInstance = sharp(input);
  if (input.includes('Abi.png')) {
    sharpInstance = sharpInstance.resize(500, 500, { fit: 'inside' });
    sharpInstance.webp({ quality: 70 });
  } else {
    sharpInstance.webp({ quality: 80 });
  }
  sharpInstance.toFile(output, (err) => {
    if (err) {
      console.error(`Error processing ${input}:`, err);
    } else {
      console.log(`Converted ${input} to ${output}`);
    }
  });
});

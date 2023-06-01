export function sayHello() {
  let input= document.getElementById("image_uploads");
const preview = document.querySelector('.preview');
const avatar = document.getElementById('avatar');

const myButton2 = document.getElementsByClassName('myButton2')[0];
const myButton3 = document.getElementsByClassName('myButton2')[1];
const submit = document.getElementsByClassName('myButton3')[0];
submit.addEventListener('click',Post)
let  data = {
  "username":"petra99",
	"title": "123456",
	"content":  ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem fringilla ut morbi. Cursus eget nunc scelerisque viverra mauris. At imperdiet dui accumsan sit amet nulla facilisi. Adipiscing diam donec adipiscing tristique risus nec. Ipsum dolor sit amet consectetur. Egestas pretium aenean pharetra magna ac placerat vestibulum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Maecenas volutpat blandit aliquam etiam erat velit. Sit amet dictum sit amet justo donec. Quam viverra orci sagittis eu. Duis ut diam quam nulla. Egestas tellus rutrum tellus pellentesque eu. At urna condimentum mattis pellentesque id nibh tortor. Sed enim ut sem viverra aliquet eget sit amet tellus. Eleifend quam adipiscing vitae proin sagittis. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Viverra justo nec ultrices dui.", 
							 
"Dignissim convallis aenean et tortor at risus viverra adipiscing at. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Viverra maecenas accumsan lacus vel. Risus nullam eget felis eget nunc lobortis mattis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Faucibus interdum posuere lorem ipsum dolor sit. Faucibus pulvinar elementum integer enim. Id porta nibh venenatis cras sed felis eget velit. Semper feugiat nibh sed pulvinar proin.",

"Ullamcorper malesuada proin libero nunc consequat interdum varius sit. In iaculis nunc sed augue. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Libero enim sed faucibus turpis in eu mi. Eu facilisis sed odio morbi. Ut ornare lectus sit amet est. Ac ut consequat semper viverra nam libero justo laoreet. Pellentesque adipiscing commodo elit at imperdiet. Magna ac placerat vestibulum lectus. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Risus viverra adipiscing at in. In dictum non consectetur a erat nam at. Duis at tellus at urna condimentum mattis pellentesque id. Eu sem integer vitae justo eget magna fermentum iaculis. Dignissim convallis aenean et tortor."
							]
}

const textSide3 = document.querySelector('.textSide4');

const postImg = "http://localhost:3000/article/add";

/* myButton2.addEventListener('click', () => {
  console.log("radi");
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Upiši paragraf..';
  textSide3.appendChild(textarea);
});

myButton3.addEventListener('click', () => {
  const textareas = textSide3.getElementsByTagName('textarea');
  if (textareas.length > 0) {
    const lastTextarea = textareas[textareas.length - 1];
    textSide3.removeChild(lastTextarea);
  }
}); */



let changedImg = false;
const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }
  function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }

input.addEventListener('change', updateImageDisplay);
function updateImageDisplay() {
    
    const curFiles = input.files;
    if (curFiles.length === 0) {
      console.log("nema slike");
    } 
    else {    
      for (const file of curFiles) {
        if (validFileType(file)) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                changedImg=true;
                avatar.src = reader.result;
              });
            reader.readAsDataURL(input.files[0]);        
        } else {
          console.log("wrong type");
        }  
      }
    }
  }
}






async function Post(e){//fetch POST
  console.log("uso u post");
  e.preventDefault();
 /*  const formData = new FormData();
  formData.append('image', input.files[0]); */
  try{
    const res = await fetch(postImg, {
      method: 'POST',
      body: data,
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    else{
      console.log("uspjeh");
    }
 
  } catch (err) {
      console.log("nema nove slike");
  }    
 
}



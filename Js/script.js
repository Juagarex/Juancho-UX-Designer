//definimos array de proyectos

const proyectos =[
    {
        titulo:"Bank Design 2023",
        descripcion:"Reto de diseño enfocado en mejorar la interacción de adultos mayores con productos financieros en canales digitales.",
        imagen:"./Assets/img/imagen.jpg",
        enlace:"#"
    },
    {
        titulo:"Buddy",
        descripcion:"Caso de estudio sobre una problematica habitual a la que se exponen los dueños de mascotas..",
        imagen:"./Assets/img/imagen.jpg",
        enlace:"#" 
    },
    {
        titulo:"el mejor team",
        descripcion:"El mejor profe",
        imagen:"./Assets/img/imagen.jpg",
        enlace:"#"  
    }

// aqui puedes agregar mas proyectos
 ];

 //Seleccion del contenedor dnde se mostraran los proyectos

 const contenedorPortafolio = document.getElementById("porfolio-container");

 //Funcion para cargar y mostrar lso proyectos

 function mostrarProyectos() {
    proyectos.forEach((proyecto, index)=>{
        //crear un contenedor para cada proyecto
        const card=document.createElement("div");
        card.classList.add("project-card");

        //crear un contenedor para la informacion del proyecto
        const info=document.createElement("div");
        info.classList.add("project-info");

        //Crear y configurar el numero y titulo del proyecto
        const titulo= document.createElement("h3");
        titulo.textContent = ` ${index + 1} / ${proyecto.titulo} `;

        //crear y confiurar la descripcion del proyecto
        const descripcion= document.createElement("p");
        descripcion.textContent = proyecto.descripcion;

        //crear y configuar el link del proyecto
        const enlace = document.createElement("a");
        enlace.href = proyecto.enlace;
        enlace.textContent = "More shots from this project ↗";

        //agregar titulo, descripcion y enalce a la seccion de info

         info.appendChild(titulo);   
        info.appendChild(descripcion);
        info.appendChild(enlace);

        //crear y copnfigurar la imagen del proyecto
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("project-image");

        const img = document.createElement("img");
        img.src=proyecto.imagen;

        //agregar imagen a su contenedor
        imageContainer.appendChild(img);

        // agregar la info y la img al contenedor del proyecto
        card.appendChild(info);
        card.appendChild(imageContainer);

        //agregar tarjeta al contenedor principal
        contenedorPortafolio.appendChild(card);
 
    });
    
 }

 // llamar la funcion

 mostrarProyectos();
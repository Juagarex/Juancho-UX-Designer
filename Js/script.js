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

 // Definimos array de las tarjetas de la galeria

 const galeria =[
    {
        titulo:"Infinite Imprints",
        descripcion:"Visual Design",
        imagen:"./Assets/img/img1.png",
    },
    {
        titulo:"Vivid Reverie",
        descripcion:"UI, Art direction",
        imagen:"./Assets/img/img2.png",
    },
    {
        titulo:"Epicurean Canvas",
        descripcion:"Visual Design",
        imagen:"./Assets/img/img3.png",
    },
    {
        titulo:"Quantum Echoes",
        descripcion:"Product Design",
        imagen:"./Assets/img/img4.png",
    },
    {
        titulo:"Nebula Elgance",
        descripcion:"Art direction",
        imagen:"./Assets/img/img5.png",
    },
    {
        titulo:"Urban Mirage",
        descripcion:"Product Design",
        imagen:"./Assets/img/img6.png",
    }

// Aqui se pueden agregar mas imagenes a futuro
 ];

 //Seleccion del contenedor donde se mostraran las tarjetas de la galeria

 const contenedorGaleria = document.getElementById("gallery-container");
        
    // Crear el titulo principal del contenedor 
        const cardContTitle=document.createElement("div");
        cardContTitle.classList.add("cont-title");

        const cardTitle=document.createElement("h2");
        cardTitle.textContent = "Latest Work";

        cardContTitle.appendChild(cardTitle);
 
 //Funcion para cargar y mostrar las tarjetas de la galeria

 function mostrarTarjetas() {
    galeria.forEach((galeria, index)=>{

        //crear un contenedor para cada una de las tarjetas
        const cardGallery=document.createElement("div");
        cardGallery.classList.add("card-gallery");

        //crear y configurar la imagen de la tarjeta
        const cardImageContainer = document.createElement("div");
        cardImageContainer.classList.add("card-image");

        const img = document.createElement("img");
        img.src=galeria.imagen;

        //Crear y configurar el numero y titulo de la tarjeta
        const cardTitulo= document.createElement("h3");
        cardTitulo.textContent = galeria.titulo;

        //crear y configurar la descripcion de la tarjeta
        const cardDescripcion= document.createElement("p");
        cardDescripcion.textContent = galeria.descripcion;

        //agregar imagen a su contenedor

        cardImageContainer.appendChild(img);
        
        //agregar titulo, descripcion e imagen al contenedor de las tarjetas


        cardGallery.appendChild(cardImageContainer);   
        cardGallery.appendChild(cardTitulo);   
        cardGallery.appendChild(cardDescripcion);

        //agregar tarjeta al contenedor principal

        contenedorGaleria.appendChild(cardContTitle);
        contenedorGaleria.appendChild(cardGallery);
     });
    
 }

 // llamar la funcion

 mostrarTarjetas();
const log=(param)=>console.log(param);
log("working")

function getName(name){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (name.length ==0){
            reject("please enter the valid name");}else{
                resolve(name)
            }
        
    },2000);
})
}
function getAge(name){
    setTimeout(()=>{
        log(`you entered age as ${name}`)
    },2000)
}
function displayDetails(name,age){
    setTimeout(()=>{
        log(`Hi ${name} we got your age as ${age} `)
    },2000)
}
getName("vengadesan")
.then((data)=>{
    log("Your name is",data);
    return data;
})
.then((name)=>{
    getAge(25);
    return name;
})
//functionality1
let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        log("promise1 is called")
        resolve(25)
    },1000)
})
//finctionality2
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        log("promise2 is called")
        resolve(50)
    },2000)
})
//finctionality
let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        log("promise3 is called")
        resolve(75)
    },3000)
})
Promise.all([promise1,promise2,promise3])
.then((value)=>{
    log("promise value",value);
})
.catch((err)=>{
    log("error:",err)
});

//fetch data
fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{log(data);
    data.forEach((element)=>{
const countryobject={...element,
    name:element.name.common,
    flags:element.flags.png,
    population:element.population,
    region:element.region,
    capital:element.capital,
}
createcountryCard(countryobject);
    })
   
})
.catch((err)=>log("error:",err))

function createcountryCard(element) {
    // Create elements
    const container = document.createElement("div");
    container.classList.add("container");

    const img = document.createElement("img");
    img.src = element.flags;
    img.alt = element.name;

    const information = document.createElement("div");
    information.classList.add("information");

    const h2 = document.createElement("h2");
    h2.textContent = element.name;

    const population = document.createElement("p");
    population.innerHTML = `<span> Population: ${element.population} </span>`;

    const region = document.createElement("p");
    region.innerHTML = `<span> Region: ${element.region} </span>`;

    const capital = document.createElement("p");
    capital.innerHTML = `<span> Capital: ${element.capital} </span>`;

    const button = document.createElement("button");
    button.classList.add("btn-fun");
    button.textContent = "Get Weather";

    // Append elements
    information.appendChild(h2);
    information.appendChild(population);
    information.appendChild(region);
    information.appendChild(capital);
    information.appendChild(button);

    container.appendChild(img);
    container.appendChild(information);

    // Append the whole card to the document body
    document.body.appendChild(container);
}
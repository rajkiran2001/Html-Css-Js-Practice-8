const jokel = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')


generatejoke()

async function generatejoke(){
    const config={
        headers:{
            Accept:'application/json',
        },
    }
    const res= await fetch('https://icanhazdadjoke.com/',config)
    const data = await res.json()
    
    jokel.innerHTML=data.joke
    

}
// function generatejoke(){
//     const config={
//         headers:{
//             Accept:'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com/',config)
//     .then((res)=>res.json())
//     .then((data)=>{
//         jokel.innerHTML=data.joke
//     })

// }
jokebtn.addEventListener('click',generatejoke)

let form=document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let recipe_name=document.getElementById("recipe_name").value
    console.log(recipe_name)

    let actualData=async()=>{

        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe_name}`)
                   let recipe = await data.json()
                   console.log(recipe.meals)
                
           let container=document.getElementById("container")
           container.innerHTML =``
         recipe.meals.forEach((ele)=>{
    
                   let  item_container= document.createElement("div")
                   item_container.setAttribute("id","item_container")
    
                    container.appendChild(item_container)

                        let food_img=document.createElement("img")
                        food_img.src=`${ele.strMealThumb}`
                        food_img.setAttribute("id","food_img")

                        let food_title=document.createElement("food_title")
                         food_title.innerHTML=`${ele.strMeal}`
                      food_title.setAttribute("id","food_title")

    
                      let view_recipe=document.createElement("view_recipe")
                      view_recipe.innerHTML='View Recipe'
                       view_recipe.setAttribute("id","view_recipe")
    
                       item_container.append(food_img,food_title,view_recipe)

       let  ing_ins=document.querySelector("#ing_ins")


            view_recipe.addEventListener('click',()=>{
                ing_ins.style.display="block"
                let ing_info=document.getElementById("ing_info")
                ing_info.innerHTML=""
                let ul=document.createElement("ul")
                for(let i=0;i<=20;i++){
                    let ingredient=ele[`strIngredient${i}`]
                    let measure=ele[`strMeasure${i}`]
                    let li=document.createElement("li")
                    if(ingredient!=""){
                        li.innerHTML=`${ingredient} ${measure}`
                        ul.appendChild(li)
                    }
                }
                let h1=document.createElement("h1")
                h1.innerHTML="INGREDIENTS"
                ing_info.append(h1,ul)

                let ins_info=document.getElementById("ins_info")
                ins_info.innerHTML=`
                <h1>INSTRUCTIONS</h1>
                <p>${ele.strInstructions} </p>`

            })

            let close=document.querySelector("#close")
       close.addEventListener('click',()=>{
    ing_ins.style.display="none"
          })

         })
    
    }
    actualData()

})
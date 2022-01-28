/**
 * 
 */
const submit_form =document.getElementById('submit_form');
const list_item = document.querySelector('.list-item');



submit_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelectorAll('input[name="skill"]:checked')
    let photo = this.querySelector('input[name="photo"]');
    

    let skills_arr =[];

    for (let i = 0; i < skill.length; i++) {
        skills_arr.push(skill[i].value);
        
    }

    let data_arr;
    if(getData('devs')){
       data_arr=getData('devs'); 
    }else{
        data_arr= [];
    }
    data_arr.push({
        name   :name.value,
        gender :gender.value,
        skill  :skills_arr,
        photo  :photo.value
    });

    dataSend('devs', data_arr);
    allDevs();
});


allDevs();
function allDevs(){
    let all_devs = getData('devs');

    let data='';
    all_devs.map(d => {
        let list = '';
      

        d.skill.map(lists => {
            list += '<li class="list-group-item"> '+ lists +'</li>'
        });

        
        data +=`
        <div  class="col-md-4 my-3">
        <div style="height: 650px;" class="card  list">
        <div class="card-body">
        
        <img class="rounded-circle" style=" width: 100%;  height:250px; object-fit: cover;" class="card-img" src="${d.photo}" alt="">
            Name<h2>${d.name}</h2>
            <p>Gender : ${d.gender}</p>
            Skills
            <hr>
            <ul class="list-group">
                ${list}
            </ul>
            </div>
        </div>
    </div>
        `;
    });
    list_item.innerHTML =data;
}

const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7gFTwWnpsh5Higt49cnrPzVV2XaealA-GVBZswahODo679UBc_AIi0qAfvSuKOBLCU0&usqp=CAU"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F09%2F10%2Ft-rex-2000.jpg&q=60"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2021/03/05/22/44/dinosaur-6072475__340.png"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://cdn.cnn.com/cnnnext/dam/assets/190828152336-07-western-us-dinosaur-road-trip-super-169.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://images.unsplash.com/photo-1606856110002-d0991ce78250?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://www.pe.com/wp-content/uploads/2021/02/RPE-L-VDAYDINO-01-WP-1.jpg"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://i0.wp.com/petsidi.com/wp-content/uploads/2018/07/black-pomeranian-price.jpg?w=680&ssl=1"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://149366108.v2.pressablecdn.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-19-at-8.32.11-AM.png"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/4/2020/12/dino-80bbd77.jpg?quality=90&resize=768,574"
    }
  ];

 /*pets.forEach((animal) => {
    console.log(animal);
  });*/


pets.forEach(function(animal, index, array){
  animal.id = index + 1;
});

//console.log(pets);

//renderToDom
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId)
  selectedElement.innerHTML = textToRender;
};


//card
const petsOnDom = (array) => {
  let domString = "";
  for (const animal of array) {
    domString += `
    <div class="card">
    <header class="card-header">${animal.name}</header>
    <img class="image" src="${animal.imageUrl}">
    <div class="card-body">
      <h6 class="card-text">${animal.color}</h6>
      <p class="card-text">${animal.specialSkill}</p>
    </div>
   <div class="card-footer footer-for-${animal.type}">${animal.type}</div>
   <button type="button" id="delete-pet--${animal.id}">Delete</button>
  </div>
  `;
}
renderToDom('#cardContainer', domString);
};



//filter buttons
const filterButtons = () => {
  let domString = "";
  domString =
    `<button id="cat" type="button" class="btn btn-primary">Cat</button>
    <button id="dog" type="button" class="btn btn-primary">Dog</button>
    <button id="dino" type="button" class="btn btn-primary">Dino</button>
    <button id="all" type="button" class="btn btn-primary">All</button>`;
  renderToDom("#filterContainer", domString)
};




//petModal
const petModal = () => {
  const domString = `<!-- Button trigger modal -->
  <button type="button" class="btn-add-pet" data-bs-toggle="modal" data-bs-target="#add-pet">
  Add Pet
  </button>
  <!-- Modal -->
  <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Pet</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body">
      
        <form>
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Animal Id" id="animalId" aria-label="animal id" required>
          <label for="animalId">Pet's name</label>
        </div>
         <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="imageURL" id="imageUrl" aria-label="imageUrl" required>
          <label for="animalId">ImageURL</label>
        </div>
    
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
          <label for="title">Color</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="specialSkill" id="specialSkill" aria-label="specialSkill" required>
          <label for="title">Special Skill</label>
        </div>
        <div class="form-floating mb-3">
          <select class="form-select form-control-lg" id="type" aria-label="type" required>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="dino">Dino</option>
          </select>
          <label for="category">Type</label>
        </div>
    
    <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Submit</button>
    </form> 
      
    </div>
    </div>
    </div>
  </div>`;
renderToDom('#createContainer', domString);
};



//Event listeners
function eventListeners() {
  let domString = "";
  document.querySelector('#filterContainer').addEventListener('click', (e) => {
    if (e.target.id === 'all') {
      petsOnDom(pets);
    }else if (e.target.id === "dog") {
      const dog = pets.filter((taco) => taco.type === e.target.id);
      domString = dog;
      petsOnDom(dog);
    }else if (e.target.id === "cat") {
      const cat = pets.filter((taco) => taco.type === e.target.id);
      domString = cat;
      petsOnDom(cat);
    }else if (e.target.id === "dino") {
      const dino = pets.filter((taco) => taco.type === e.target.id);
      domString = dino;
      petsOnDom(dino);
    }
  }
  );

//Add new pet button
  const form = document.querySelector('form');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    newPetObject = {
      name: document.querySelector("#animalId").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#type").value,
      imageUrl: document.querySelector("#imageUrl").value,
    },
  pets.push(newPetObject);
  petsOnDom(pets);

  form.reset()

  });

//Delete button
  document.querySelector('#cardContainer').addEventListener('click', (e) => {  
    if(e.target.id.includes('delete')) {
      const [method, id] = e.target.id.split("--");
      const index = pets.findIndex(pet => pet.id === parseInt(id));
      pets.splice(index, 1);
      console.log("Delete Button Pressed")
      petsOnDom(pets);
    };
  });

};

//start up
function startApp() {
  filterButtons();
  petModal();
  petsOnDom(pets);
  eventListeners();
};

startApp();
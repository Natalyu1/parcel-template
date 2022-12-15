let tours = [
    {
      id: 1,
      country: 'Россия',
      city: 'Самара',
      hotelName: 'Ренисанс',
      rating: '5 звезд',
      image: '1.jpg',
      price: '5200/сутки',
      startTime: '12.06.2022',
      endTime: '22.06.2022'
    },
    {
      id: 2,
      country: 'Россия',
      city: 'Москва',
      hotelName: 'Cosmos Moscow Vdnh Hotel 3*',
      rating: '3 звезд',
      image: '2.jpg',
      price: '3800/сутки',
      startTime: '12.06.2022',
      endTime: '22.06.2022'
    },
    {
      id: 3,
      country: 'Россия',
      city: 'Белгород',
      hotelName: 'Cosmos Vdnh Hotel 5*',
      rating: '5 звезд',
      image: '3.jpg',
      price: '7300/сутки',
      startTime: '12.09.2022',
      endTime: '19.09.2022'
    }

    ]

    const container = document.getElementById("myContainer")


    function rendertours() {
      container.innerHTML = ""
      tours.forEach((tour) => {
      container.innerHTML += `
      <div class="mt-12 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <div class="bg-white rounded-xl overflow-hidden">
         <div>
          <img class="h-80 w-full" alt="изображение" src = "${tour.image}"/>

          <div class="p-6">
              <div>
                  <p class="text-yellow-600 fond-medium hover:underline">
                      <a href="#">Для всей семьи</a>
                  </p>
                  <a href="#">
                    <p class="font-bold mt-3 text-xl">${tour.country}</p>
                    <p class="font-bold mt-3 text-lg">${tour.city}</p>
                    <p class="font-bold mt-3 text-lg">${tour.hotelName}</p>
                    <p class="font-bold mt-3 text-lg">${tour.price}</p>
                    <p class="font-bold mt-3 text-lg">${tour.startTime}</p>
                    <p class="font-bold mt-3 text-lg">${tour.endTime}</p>
                    <p class="text-gray-500 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga culpa, 
                      similique sequi cum eos quis dolorum.
                    </p>
                  </a>

              </div>

              <div class="mt-3 text-gray-500 text-sm flex items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    
                  <span class="pl-1">7 km</span>
                  <span class="mx-2" aria-hidden="true">&middot;</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    
                  <span class="pl-1">120 мин</span>
              </div>
              <button class="button-color mt-4">Подробнее</button>
          </div>
         </div>

      </div>
      `
    }
  )

}

 rendertours()


async function searchTours() {
    const respanse = await fetch('https://www.bit-by-bit.ru/api/student-projects/tours')
    const tours = await respanse.json()
       

        tours.forEach(tour => {
            document.getElementById("myContainer")
       });
}
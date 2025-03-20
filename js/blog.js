const blogContainer = document.getElementById("blog-container");
const nextButton=document.getElementById("next");
const prevButton=document.getElementById("prev");

let scrollAmount = 0;


nextButton.addEventListener("click",function(){
  const containerWidth = blogContainer.offsetWidth;
  const contentWidth = blogContainer.scrollWidth;
  if (scrollAmount + containerWidth < contentWidth) {
    scrollAmount += containerWidth;
    blogContainer.scrollBy({
      left:containerWidth,
      behavior: "smooth"
    });
    prevButton.disabled=false;
  }
  if (scrollAmount + containerWidth >= contentWidth) {
    nextButton.disabled = true;
  }
});

prevButton.addEventListener("click", function(){
  const containerWidth = blogContainer.offsetWidth;
  if (scrollAmount - containerWidth >= 0) {
    scrollAmount -= containerWidth;
    blogContainer.scrollBy({
      left: -containerWidth,
      behavior: 'smooth'
    });
    nextButton.disabled = false;
  }
  if (scrollAmount - containerWidth < 0) {
    prevButton.disabled = true;
  }
});


  // Blog data (you can replace this with your actual blog data)
  const blogData = [
    { image: '../Assests/images/Best Software Development Company in India _ Slash Star.jpg', title: ' The Future of Technology', author: 'Abebe G', date: 'Date January 1, 2022' },
    { image: '../Assests/images/64e88135-7962-489e-8487-65deae085d62.jpg', title: 'The History of Books', author: 'Abebe G', date: 'January 1, 2022' },
    { image: '../Assests/images/photo-1600880292203-757bb62b4baf.jpg', title: 'The Impact of Art on Society', author: 'Abebe G', date: 'January 1, 2022' },
    { image: '../Assests/images/Seria pensativa jovem mulher bonita vestindo camisa branca sentir-se como cool empresário confiante cruzar as mãos _ imagem Premium gerada com IA.jpg', title: ' The Role of Music in Human Emotion', author: 'Abebe G', date: 'January 1, 2022' },
    { image: '../Assests/images/photo-1600880292203-757bb62b4baf.jpg', title: 'The Science Behind Sleep', author: 'Abebe G', date: 'January 1, 2022' },
    { image: '../Assests/images/How To Thrive As An Entrepreneur While Earning A Doctoral Degree.jpg', title: 'The Evolution of Language', author: 'Abebe G', date: 'January 1, 2022' },
  ];

  // Initial index and number of cards to display
  let currentIndex = 0;
  const cardsToDisplay = 3;

  // Function to update the display of blog cards
  function updateBlogCards() {
    // Clear the existing cards
    blogContainer.innerHTML = '';

    // Loop through and add the next set of cards
    for (let i = currentIndex; i < currentIndex + cardsToDisplay && i < blogData.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card", "mt-3", "bg-accentColor", "p-4", "rounded-lg", "shadow-lg", "flex-shrink-0");

      const image = document.createElement("img");
      image.src = blogData[i].image;
      image.classList.add("w-full", "h-40", "object-cover", "rounded-lg");
      card.appendChild(image);

      const title = document.createElement("h3");
      title.classList.add("text-xl", "mt-2", "mb-2", "p-2", "text-button");
      title.textContent = blogData[i].title;
      card.appendChild(title);

      const author = document.createElement("div");
      author.classList.add("flex", "items-center", "gap-2", "mb-3", "mt-3");

      // Removed author image section
      const authorName = document.createElement("p");
      authorName.textContent = blogData[i].author;
      author.appendChild(authorName);
      card.appendChild(author);

      const calendar = document.createElement("div");
      calendar.classList.add("flex", "items-center", "gap-2");

      const calendarIcon = document.createElement("i");
      calendarIcon.classList.add("far", "fa-calendar-alt");
      calendar.appendChild(calendarIcon);

      const calendarDate = document.createElement("p");
      calendarDate.textContent = blogData[i].date;
      calendar.appendChild(calendarDate);
      card.appendChild(calendar);

      blogContainer.appendChild(card);
    }

    // Disable prev button if at the start
    if (currentIndex === 0) {
      document.getElementById("prev").disabled = true;
    } else {
      document.getElementById("prev").disabled = false;
    }

    // Disable next button if at the end
    if (currentIndex + cardsToDisplay >= blogData.length) {
      document.getElementById("next").disabled = true;
    } else {
      document.getElementById("next").disabled = false;
    }
  }

  // Function to handle the next button click
  document.getElementById("next").addEventListener("click", () => {
    if (currentIndex + cardsToDisplay < blogData.length) {
      currentIndex += cardsToDisplay;
      updateBlogCards();
    }
  });

  // Function to handle the previous button click
  document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= cardsToDisplay;
      updateBlogCards();
    }
  });

  // Initial call to display the first set of cards
  updateBlogCards();


const unsplashAccessKey = 'zFYJPrJKdjXe0LLPIrUcY3rAF6iTiJws9PC08VGNfVQ';
const query = 'Hampi';

fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashAccessKey}`)
  .then(response => response.json())
  .then(data => {
    const images = data.results;
    const carouselIndicators = document.getElementById('carousel-indicators');
    const carouselInner = document.getElementById('carousel-inner');

    images.forEach((image, index) => {
      // Create carousel indicators
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.dataset.bsTarget = '#carouselExampleIndicators';
      indicator.dataset.bsSlideTo = index;
      indicator.ariaLabel = `Slide ${index + 1}`;
      if (index === 0) indicator.className = 'active';
      carouselIndicators.appendChild(indicator);

      // Create carousel items
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item${index === 0 ? ' active' : ''}`;
      const imgElement = document.createElement('img');
      imgElement.src = image.urls.regular;
      imgElement.className = 'd-block w-100';
      imgElement.alt = image.alt_description || 'Hampi Image';
      carouselItem.appendChild(imgElement);
      carouselInner.appendChild(carouselItem);
    });
  })
  .catch(error => console.error('Error fetching images:', error));

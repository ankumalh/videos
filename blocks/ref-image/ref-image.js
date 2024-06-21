function createPictureSource(href, width, title){
    const source1 = document.createElement('source');
    source1.setAttribute('srcset', `${href}/as/${title}?width=${width}&preferwebp=true`);
    source1.setAttribute('type', 'image/webp');
    if (width > 600){
        source1.setAttribute('media', '(min-width: 600px)');
    }
    return source1;

}

export default async function decorate(block) {
    const href = block.querySelector('a')?.href;
    const title = block.querySelector('a')?.title;
    if (href){
        const picture = document.createElement('picture');
        picture.appendChild(createPictureSource(href, 2000, title));
        picture.appendChild(createPictureSource(href, 600, title));
        const img = document.createElement('img');
        img.setAttribute('src', `${href}`);
        picture.appendChild(img);

        block.replaceChildren(picture); 
    }
  }

  
  
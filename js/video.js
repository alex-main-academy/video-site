const videoWrapper = document.querySelectorAll(".js-video-wrapper");

videoWrapper.forEach((item) => {
    const videoID = item.getAttribute("data-video-id");

    fetch(`https://vimeo.com/api/v2/video/${videoID}.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const videoName = data[0].title;
            const posterUrl = data[0].thumbnail_large;

            item.innerHTML = `
                <iframe src="https://player.vimeo.com/video/${videoID}?h=afa85e1594" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <div class="example__poster js-video-poster">
                    <img src=${posterUrl} alt=""/>
                    <p class="example__name js-video-title">${videoName}</p>
                    <img src="img/play-icon.png" alt="" width="36" height="36" class="example__play" />
                </div>
            `;

            const iframe = item.querySelector("iframe");
            const player = new Vimeo.Player(iframe);

            item.addEventListener("click", () => {
                item.querySelector(".js-video-poster").classList.add(
                    "is-video"
                );
                player.play();
            });
        });
});

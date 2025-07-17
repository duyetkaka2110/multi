var playerSdk = new SaruPlayer({
    lang: 'en',
    id: 'video',
    url: saru_link,
    isLive: true,
    width: 600,
    height: 400,
    autoplay: true,
    autoplayMuted: false,
    vodLogOpts: {
        line_app_id: 562771,
        tag: 'normal'
    }
});
if(getCookie("acceptCookies1") == 'true'){
    const script = document.createElement('script');
    //script.type = 'text/javascript';
    script.async = true;
    script.onload = () => { dataLayer.push({ event: 'gtm.js', 'gtm.start': (new Date()).getTime(), 'gtm.uniqueEventId': 0 }); } // this part ensures PageViews is always tracked
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-GP2T3Q7XDD';

    document.head.appendChild(script);
    const script2 = document.createElement('script');
    script2.innerHTML="window.dataLayer = window.dataLayer || [];"+" function gtag(){dataLayer.push(arguments);}"+"  gtag('js', new Date());"+"  gtag('config', 'G-GP2T3Q7XDD');"

    document.head.appendChild(script2);
}

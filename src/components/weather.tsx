import { useEffect, useState } from "react";

function Weather() {
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        (async function () {
            const { temperatura } = await(await fetch('https://danepubliczne.imgw.pl/api/data/synop/id/12250')).json();
            setTemperature(temperatura);
        })();
    });

    return (
        <>
            <h1>Blog about Front End development</h1>
            <h2>(and hating it)</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>Hello world, Temperatura w Toruniu to {temperature}°C</div>
        </>
    );
}

export default Weather;
import "./Banner.css"

function Banner() {
    //JSX - Como o React trabalha com a parte visual, paracendo HTML (mas não é HTML)
    return(
        <header className="banner">
            <img src="/assets/banner.png" alt="O banner principal da página do Organo"/>
        </header>

    );
}

export default Banner;
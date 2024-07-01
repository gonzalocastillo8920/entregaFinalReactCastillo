
//const categorias = ['Laptops', 'Smartphones', 'Cameras', 'Consoles', 'Accesories']
const categories = [
    { id: 1, name: "Hombres", img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhISFhMSEhgYEhUVEhIWGBISFRUXFxUVFxUYHSggGBolGxUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OFQ8QFSsdFRotLTguKysrOCsrLSstLS0yLSsrNys4Ky0tNy0tLTA3NzA3Ny0tKy0tLSs3KysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBQcIBgH/xABCEAACAQIDBAcEBwUHBQAAAAAAAQIDEQQSIQUGMUEHEyJRYYGhMnGRsRQjQlJywdE0YoKy8BUzQ3N0kuEINVOzwv/EABkBAQEBAQEBAAAAAAAAAAAAAAABBAIDBf/EACARAQEAAgIBBQEAAAAAAAAAAAABAhEDIRITIkFhcTH/2gAMAwEAAhEDEQA/AN4gAAAAAAAAAAAABTOaim20kldtuySXFtlRqXpd27KVRYGM2qaS6xRvec3rGLtySV7HOWWptZN3TN7e6VcJRbhRTryXOLShf8T4lpgOleE2lLDT15wmpJehq5bFqPgrJ971Z6HY+7NaVsrjDlm5yXijw9bb39FuLYm8uGxWlKos92nTl2ZprinF/kZg0ftzAYvAr6SoqaptSzwupQtzfev1No7j7wLH4SnibWk7xmuHbjxt4cz2wy28s8PFnwAduAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANHyoqptTESmk3GrUtfw0Xojd1SVk2+CV35GmqazY6tVSahXpSqQ77Scfg9fU8Oe+17cGNt2vJRg2leKt7jLbPqQg+1OKjprJpK5r/AGlgaqqw6uFNdrV9pyWvFs9btXY9WthIuhl6xSvJOzzxtayvwMuM7bLenrcbKFWlKOaMk4u9mnpbwLbovpqFCtSj7Ea94+GaEbr4pvzMXunseVOKlPLmy2laLjr63MnuDB0nKL165zlo/Y6qSik14qTZpwvbNyY+17UAGhmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFM4ppp8GrPzNaVNlrDV6kW7xy/V3T7NJW0Xhw+Bs0xW8uGU8PPTVK68uPpc8ebDyx/Htw8njfqtYYq7rJx4Ja93DTUzOysVOpCVNThDsvVvXO1pld+C46mJxOAjKdObbTgtHybtbtLg1Yy+w6mdyhKCyWabyx1vp90ycbdf4u93doVLOnVs5RnlbVtXZtP0Z6bYeBUZ1KqTTm1e6tqlrZfA8/hMBCilGnFRi5XS9yyr5v4ntMO04q3caOKd9svNn118pQAaWUAAAAAAAAAAAAAAAAAAAAAAAAAAAFtjcfSorNVqQgu+clHh7+Jr3eHpkwdG8cPGeIkuaeSnf8T1a9yYHq99N54bPw8qzSlPhTp5knOT4eNlzNJ4XpB2ljMVh6VSslSdZdZCEI004rjm4trwueX3p3pq4/ESxFZ2b0hFO8acfux+ZiM9mpJ8OaObNyxZdXbe9em9UuHd+g2fiKsZWjCTb0sa93Z39nBqliu3Dgqn2o/i+8vHj7zaeycdDSqpJwlHSSatbje58+4ZYZarfjnMp0yWDp1HJOpp3LuNb7Q3gxuztoYnqa8J0qks0abvOEXLVpq6s14PmT73dIspylQwjyxWk632pd6h91fvcfceDnU4uUud22+PmbuLCzusfNnL1G8tzOkani5KjiIxpVn7LTeSo+5X1i/B3957tHKcMavs3du7T1NibrdKdWhCNHE03VhG/1im+sSu2k82krXty0R62PGVukHltkb/4DENRjWyTlwjUTjr3Xeh6lEdAAAAAAAAAAAAAAAAAAAAAAeW6RN5/7PwkqsXHrpvLRTV+0+Mrc7LU9Sc/dMm2evx0qKf1eHSppfvtKU38Wl/CSjwe2NqVsTUdWtVnUnJ3blJvyS4JeCMc2ST0diOwRS0fFRb1V/IuKdMu6cLAY5QkuMXp4fmZnA7SrRoSoRqJU27uDnq0+UWuXeiKVSVrLUqw1Kyloru19PFCyVZlYjjneisl4FdPDR4u8n+82/TgSxKkztxUuVHxPl/TPjPtgiWmjZnRhvhKFRYOvUcqdSyouTv1cuUbv7L4eBrCHyPtKs1K6fDgxVjqwGG3R2r9KwlKu32nG0/xx0f6+ZmTl2AAAAAAAAAAAAAAAAAAAcqbz1XPFV5PXNWm35yZ1LjKmWnOX3YSfusmzlDHzvOT43bfxZKMZVjr5EaLucblrUVgiWLJVItozXcTXQE9y4pPR+XziW0SSD0fl80USNhEakVKZdppPGRUifCbJqTWeU6VKPJ1ZuGZWvdaO6KsbgXSSfXUKl3ZqlVU8ul9bK1uV1csqaW8+FyBEleVokUODfciVZG8uhXFZsLUpt/3dXReEop/M2IaT6Fdo5cTKjfStTf+6HaXpmN2EdAAAAAAAAAAAAAAAAAAA830h490MBXkuMo5F4Oby39TmjFzXmbt6c8c44ehRvZVakm/4I6L4y9DQuJqZXr5+BKGIr5UpePxKsQk7SXBq6LLHSvFGV/s+pSpwjUVnKnCpH/LqxzQ9HcIx5XFlM0UXAuqcyWNTR/1zRZwkSxegEyqEkahZ3K0wi76xu2raSsteC42XdxZXSZaxkX2FjzKq02li8s1HlFa+96/oTyn9Xdfaeh6fpf3L+iwwuLpQSpTo04V7J/tCV3OX4r2v+6jxUZ/UxXcwPVbmbSdCtSrr/DqRb8Y37S81dHTcJJpNapq68Uzk3Zk+zfxR0ruLtDr8DQqN6qGWXvh2fyQIz4ACgAAAAAAAAAAAAAAANIdO+36VWcMDGM1Ww1RTlN2UXGdP2Yri/ajrpwNR46Wiff8zdX/AFAbLi4UMUo9q8qUnZa6ZoeatL4miK9KXP1IKJS7Nj3u+G1YYqVDEwyrPgaMakI8KdWnnhOPgtI28LGvGeoWz1SwtCovarxqSlrdWjLLHTlzAxtRELRPUIWEfYksVp5kcCWC0f8AXMAkVKJTErQRJBGU2bBOSi+DevuuY6mi/wAPLKnLuTfwKNwdP+PVPZkaVta1aEV4KCcn8jQSqWhFG5f+o+cvo+EVuz1sm3b7WTRX91zSFOtKVopX7gtehw0EopG7uhjbEZ4eWE+1RbmvGM3r8H8zQ+CpOVoSUlJ8M18r8LxehvHoRwCjTrVXBKTcaeZcHGN3Zf7ipGzwAR0AAAAAAAAAAAAAAAA1701bLnVwUasZO1CopShykpdm/vV/VnO+MXaatwOvdtYCOIoVaEuFSm4+bWnqclbRpOMpZr3U5Ky707fkQYarEyGBry6vK5Nxi3lTfs3427ixrt3vw/Qnwa7DfiVFzMgZLF6EbRB9itPcVplFN2ZW18wKolaZTFFcQiekXdX+7nHm6crfBlrRWpcvVtaey16HUHtun7eSbrUtmrSjClCrUta85yvlWvBJK/jfwNc4Cyj2JWS9pOF373Zl5vrteGM2jWxazOlOosjs9KUIxhHRcHaN/MhxFRxtNX6t8Jwk9F4p3EKyOHoZmtZXb79F6HS26my44bC06cbu8VKTfFykk2aK3A3dnjK/VJ9iFpVZ2taF+VtLvkdFxVlZcFwCyPoAIoAAAAAAAAAAAAAAAAc9dMe608NiHXgvqMVNuLX+HUd5Ti/fq18OR0KeT6Tti1cZs+pSoxUqqcZwjpeWV3ai3om1dAcuVqOmll+ZVRhaKj4a+/iZTaWzp0pdXVpzpzVk4Ti4yjfXVPwMeuJEUQ5nwraKQCK7fMpR9X5gSIrgiOBImBc4fjfuRJSlZ5vG5HSeh9fA6lRbUdmuMnla9p27+Oly8oQSUtNGu3Dk/vWXLvJqCbaa58ff/SPR7k7v/TMfTpyhJ0YrNXdnbKldRb/eeVe5vuFNNw9GOy4UNn0GoZZ1IKU5W7U73ytv8Nj1hTCCSSSSSVkloklwSRUR0AAAAAAAAAAAAAAAAAAAAANadMm6csRSWMoxvUoxtUSWsqXG/jl1fubNCOB2McnbcVPr63Va01XqKL71GpJJ+lyUYhopylVQovYI+tHxfmEwkB9TJISIz6pAXdGouBXKRZIu6KugPfdGW5s8ZJVpq2Hpz7d7/WNauEfzfK5v2nBRSjFJJKyS0SS0SS7jXnQrVTw1WEW8qqRkr8s8E2vSxsUqgAAAAAAAAAAAAAAAAAAAAAAAKK08sXJ8Ipv4K5yFXqNuT4SvdeKb1Ort5MWqOFr1XwhRm/PK0vVo5OxPHTkSiJyv4fLyKXEpku7g+XcfL29wR9K4SKMxJFAfJA+XPqVwPsS8ouzvpctouy0JaHEDdXQriu1Wo6exBrxa0fzNrGiuibHdXjKcXwqxnDzazL+V/E3qVQAAAAAAAAAAAAAAAAAAAAAAAFht+FN4asqsVKn1U3OL5pRbt6HJuPgoyaV9Pm1dnWO8Ub4XEJ/+Cp/IzkzFTu2/vNy+LdvSxKLVs+XKmUSQR88iqMuRFTWpW4/8AV2ZXn8UUdXrc+9XcCSNePJNk1Ny0tFIjgkiamwNk9DdSP07LNJt05OGnB6aruekkb3ObOjbGdXtDCu/Gpkf8acV6tHSZVAAAAAAAAAAAAAAAAAAAAAAAAY7eP8AZMR/p6v8kjkrEaWXdFL4I6u3wmlgcS27LqJr4q35nJ9da27iCKQYbCCI6a1JE+BS46nxuzAnZ8lIpzHwCqLLqhFyajFXcnZLvb0RaIucLiJQd4tp2t5Aeo3ewUqOIw9WU6aarUnGOZSbfWRfBcP+Tps5R3dbeKoc269PzedW1OrhFAAUAAAAAAAAAAAAAAAAAAAAAHnekL/t2J/yv/pHLmP9uXvAJ8i1KgAj6yKQAFVPgVgAfOZLTAAzW6v7Zhv9TS/9sTq5AAAAVQAAAAAAAAAAf//Z" },
    { id: 2, name: "Damas", img: "https://www.ditinformatica.com.uy/productos/imgs/campera-deportiva-mujer-12991-31.jpg" },
    { id: 3, name: "Niños", img: "https://ae01.alicdn.com/kf/HTB1aag3c56guuRjy1Xdq6yAwpXa7/Ni-os-corriendo-camisa-de-manga-larga-deportes-ni-os-ni-o-ropa-deportiva-gimnasio-ejercicio.jpg_640x640.jpg" },
    { id: 4, name: "Tiempo Libre", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxbxpsB6ZCJQ8MT3gpcv_0freX3wrmrAEvknukP10S6fo8Ip11OR49YJ7P-dmV-tuHJk&usqp=CAU" },
    { id: 5, name: "Deportes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFU34xpPvoMbaL0kA_TtUweg55BanRdeeGI9IopVF3Z0nicZcQm9K-AdePJIefDJG9cMQ&usqp=CAU" },
];

/*function ItemListContainer({ greetings }) {
    return (
        <>
            <h1>{greetings}</h1>
            <ul className="list-group">
                {categories.map(category => (
                    <li className="list-group-item" key={category.id}>
                        <a href="#">{category.name}<>   </>
                            <img width={50} src={category.img} alt={category.name} />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}*/

function ItemListContainer({ greetings }) {
    return (
        <>
            <h2>{greetings}</h2>
            
            {categories.map( item =>(
                <div key={item.id} className="card" style={{width: '10rem'}}>
                    <img src={item.img} className="card-img-top" alt={item.name} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.name}</h5>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            ))}
        </>
    )
}


export default ItemListContainer

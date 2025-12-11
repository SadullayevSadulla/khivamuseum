import img from "../../assets/art-2.jpg"
import img2 from "../../assets/art-3.webp"
import img3 from "../../assets/art-1.webp"
import "./mainBoy.css"

const MainBoy = () => {
    return <>
        <section>
            <div className="mainBoy container">
                <div className="mainBoy1">
                    <div className="mainBoy_img">
                        <img src={img} alt="img" />
                    </div>
                    <div className="mainBoy_text">
                        <h1>An'anaviy keramika va uy-ro‘zg‘or idishlari</h1>
                        <p>Xiva keramikasi o‘zining firuza, nozik naqshlari va mustahkamligi bilan mashhur. Bu kosalar, likoplar va chovg‘omlar uylar va madrasa ichida keng qo‘llanilgan, ko‘pincha Xorazm an’anaviy san’atini aks ettiruvchi gulli yoki geometrik naqshlarga ega bo‘lgan.</p>
                        <button
                            type="button"
                            className="main_btn123"
                            aria-label="Batafsil"
                        >
                            Batafsil
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    fill="currentColor"
                                    d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mainBoy1">
                    <div className="mainBoy_text">
                        <h1>Tarixiy matolar va kiyimlar</h1>
                        <p>Ipak atlas chapanlar, kashta tikilgan bosh kiyimlar va qo‘lbola to‘qilgan belbog‘lar oddiy fuqarolar va zodagonlar kiyimining muhim qismi bo‘lgan. Bu kiyimlar ijtimoiy mavqe, mintaqaviy o‘ziga xoslik va mahalliy to‘qimachilik san’atini ifodalagan. Har bir buyum tabiiy bo‘yoqlar va o‘ziga xos rang uyg‘unligi bilan tarixiy xarakter kasb etgan.</p>
                        <button
                            type="button"
                            className="main_btn123"
                            aria-label="Batafsil"
                        >
                            Batafsil
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    fill="currentColor"
                                    d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mainBoy_img">
                        <img src={img2} alt="img" />
                    </div>
                </div>
                <div className="mainBoy1">
                    <div className="mainBoy_img">
                        <img src={img3} alt="img" />
                    </div>
                    <div className="mainBoy_text">
                        <h1>Tarixiy qurol-yarog‘ va zirhlar</h1>
                        <p>Xiva jangchilari, saroy qo‘riqchilari va amaldorlar foydalangan qilich, xanjar, kamon va zanjirli zirhlarni ko‘ring. Bu buyumlar nafaqat himoya uchun, balki hunarmandchilik va ijtimoiy mavqeni ham aks ettirgan. Shu davrdagi ko‘plab qurollar kumush bilan bezatilgan va yozuvlar bilan ziynatlangan bo‘lib, tantanaviy va amaliy vazifalarni bajargan.</p>
                        <button
                            type="button"
                            className="main_btn123"
                            aria-label="Batafsil"
                        >
                            Batafsil
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    fill="currentColor"
                                    d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default MainBoy
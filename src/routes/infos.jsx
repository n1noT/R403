import { fetchOneAgeData } from '../lib/loaders';
import ButtonMenu from '../ui/ButtonMenu';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export async function loader({ params }) {
    let ageData = await fetchOneAgeData(params.ageName);
    return { ageData: ageData, age: params.ageName };
}

export default function Infos() {
    const data = useLoaderData();

    return (
        <>
            <Link to={"/menu/" + data.age}>
                <img src='../arrow.svg' className='arrow'></img>
            </Link>
            <div className='menu__title'>
                <div className="menu__title-box ">
                    <img src={"../requin-" + data.age + ".svg"} alt="" className="menu__title-img"></img>
                </div>
                <h3 className="menu__title-subtitle">Regarde <span>{data.ageData.title}</span>, pour avoir des dents en bonne santé, évite ces aliments !</h3>
            </div>
            <div className='infos__list-box'>
                <ul className='infos__list'>
                    <li key="1" className="infos__list-item">
                        <div className="menu__list-link">
                            <ButtonMenu
                                image="../biscuit-apero.svg"
                                title="Biscuits apéritifs"
                            />
                        </div>
                    </li>
                    <li key="2" className="infos__list-item">
                        <div className="menu__list-link">
                            <ButtonMenu
                                image="../bonbon.svg"
                                title="Confiseries"
                            />
                        </div>
                    </li>
                    <li key="3" className="infos__list-item">
                        <div className="menu__list-link">
                            <ButtonMenu
                                image="../cereales.svg"
                                title="Céréales"
                            />
                        </div>
                    </li>
                    <li key="4" className="infos__list-item">
                        <div className="menu__list-link">
                            <ButtonMenu
                                image="../chips.svg"
                                title="Chips"
                            />
                        </div>
                    </li>
                    <li key="5" className="infos__list-item">
                        <div className="menu__list-link">
                            <ButtonMenu
                                image="../gateau.svg"
                                title="Gateaux"
                            />
                        </div>
                    </li>
                    <li key="6" className="infos__list-item">
                        <div className="menu__list-link">
                            <ButtonMenu
                                image="../nuttella.svg"
                                title="Pâte à tartiner"
                            />
                        </div>
                    </li>
                    <li key="7" className="infos__list-item">
                        <div className="menu__list-link">
                            <ButtonMenu
                                image="../soda.svg"
                                title="Sodas"
                            />
                        </div>
                    </li>
                    <li key="8" className="infos__list-item">
                        <div className="menu__list-link">
                            <ButtonMenu
                                image="../soda.svg"
                                title="Jus de fruit"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

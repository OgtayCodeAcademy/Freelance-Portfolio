import React from 'react'
import scss from './index.module.scss';

const HomePage_Section5 = () => {
  let [menuSection, setmenuSection] = React.useState('breakfast')
  return (
    <>
        <section className={scss.menuSection}>
            <img className={scss.sectionBackground} src="ourmenu.jpg" alt="" />
            <div className={scss.content}>
                <div className={scss.tittle}>
                <img src="waiter.png" alt="" />
                <h1>Our Menu</h1>
                </div>
                <div className={scss.actions}>
                <ul>
                    <li><button style={{color: menuSection == 'breakfast' ? 'orange' : "white"}} onClick={()=> setmenuSection('breakfast')}>Breakfast</button></li>
                    <li><button style={{color: menuSection == 'brunch' ? 'orange' : "white"}} onClick={()=> setmenuSection('brunch')}>Brunch</button></li>
                    <li><button style={{color: menuSection == 'lunch' ? 'orange' : "white"}} onClick={()=> setmenuSection('lunch')}>Lunch</button></li>
                    <li><button style={{color: menuSection == 'dinner' ? 'orange' : "white"}} onClick={()=> setmenuSection('dinner')}>Dinner</button></li>
                </ul>
                </div>
                <div className={scss.menu}>
                    {menuSection == 'breakfast' && <>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs with ham</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs with ham</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs in Puff Pastry</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs in Puff Pastry</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Eggs Benedict</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Eggs Benedict</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Soft-Boiled Organic Egg</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Soft-Boiled Organic Egg</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div></>}
                    {menuSection == 'brunch' && <><div className={scss.menuItem}>
                    <h3>Scrambled Eggs with ham</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs with ham</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs in Puff Pastry</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs in Puff Pastry</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Eggs Benedict</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Eggs Benedict</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Soft-Boiled Organic Egg</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div></>}
                    {menuSection == 'lunch' && <><div className={scss.menuItem}>
                    <h3>Scrambled Eggs with ham</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs with ham</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs in Puff Pastry</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs in Puff Pastry</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Eggs Benedict</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div></>}
                    {menuSection == 'dinner' && <>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs in Puff Pastry</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Scrambled Eggs in Puff Pastry</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div>
                    <div className={scss.menuItem}>
                    <h3>Eggs Benedict</h3>
                    <div>
                        <p className={scss.name}>with wild mushrooms and aspagaurs</p>
                        <div className={scss.dots}></div>
                        <p className={scss.price}>$9.00</p>
                    </div>
                    </div></>}
                </div>
                <button>See More</button>
            </div>
        </section>
    </>
  )
}

export default HomePage_Section5
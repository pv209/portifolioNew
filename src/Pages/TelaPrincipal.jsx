import React from 'react';
import pv from '../Imagens/pv.png'
import react from '../Imagens/react.png'
import java from '../Imagens/java.png'
import css from '../Imagens/css.png'
import javaScript from '../Imagens/javaScript.png'
import nodejs from '../Imagens/nodejs.png'
import mongodb from '../Imagens/mongodb.png'
import sql from '../Imagens/sql.png'
import python from '../Imagens/python.png'
import vue from '../Imagens/vue-js.png'


import "./style.css";

function index(props) {
const redirectFunc = () => {
	window.open("https://github.com/pv209/App-de-Receitas");
}

const redirectFunc2 = () => {
	window.open("https://github.com/pv209/Delivery-APP");
}

const redirectFunc3 = () => {
	window.open("https://github.com/pv209/Praticando-Vue");
}

const redirectFunc4 = () => {
	window.open("https://github.com/pv209/MongoDB-Aggregations");
}
return (
<>
<div>
<title>Portfolio website</title>
	<link rel="stylesheet" type="text/css" href="./style.css"/>

	<link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</div>

	<div className="main-cont">
		<div className="cont">
			<h4>Oi, meu nome é</h4>
			<h1>Paulo Vitor <span>Borges</span></h1>
			<h3>Eu sou um desenvolvedor</h3>
		</div>
	</div>

	<section class="about">
		<div class="main">
			<img src={pv} alt='back'/>
			<div class="about-text">
				<h2>Sobre mim</h2>
				<h5>Developer <span>Full Stack</span></h5>
				<p>Eu sou um desenvolvedor Full Stack, formado na Trybe e estou tentando conseguir minha primeira experiência profissional trabalhando no ramo</p>
			</div>
		</div>
	</section>


	<section>
		<div className='service'>
		<div className='skills'>
		<h1>Linguagens Aprendidas</h1>
		</div>
	
			<div className='box'>

	
           
            <img src={java} alt='back' width="150" height="150"/>
            <img src={react} alt='back' width="150" height="150"/>
			<img src={css} alt='back' width="150" height="150"/>
			<img src={javaScript} alt='back' width="150" height="150"/>
			<img src={nodejs} alt='back' width="150" height="150"/>
			<img src={mongodb} alt='back' width="150" height="150"/>
			<img src={sql} alt='back' width="150" height="150"/>
			<img src={python} alt='back' width="150" height="150"/>
			<img src={vue} alt='back' width="150" height="150" />
			</div>
        </div>
	
		</section>
		<section>
			<div className='container'>
				<h1>Projetos</h1>
			</div>
			<div className='title-projetos'>
			
			
					<div className="card" >
					<div className="card-img projeto-1"> </div>
					<h5 className="card-title">App Receitas</h5>
					<p className="card-text">Projeto feito usando meus conhecimentos de Front End.Foi feito um aplicativo para uso de receitas. </p>
 					<button className='btn' onClick={redirectFunc}>Github</button>
					</div>

					<div className="card" >
					<div className="card-img projeto-2"> </div>
					<h5 className="card-title">Delivery App</h5>
					<p className="card-text">Projeto FullStack com objetivo de simular um app de Delivery de bebidas </p>
 					<button className='btn' onClick={redirectFunc2}>Github</button>
					</div>

					<div className="card" >
					<div className="card-img projeto-3"> </div>
					<h5 className="card-title">Vue.js</h5>
					<p className="card-text">Projeto front end utilizando vue.js para aprender</p>
 					<button className='btn' onClick={redirectFunc3}>Github</button>
					</div>

					<div className="card" >
					<div className="card-img projeto-4"> </div>
					<h5 className="card-title">Java</h5>
					<p className="card-text">Projeto BackEnd em java para aprender</p>
 					<button className='btn' onClick={redirectFunc4}>Github</button>
					</div>


					<div className="card" >
					<div className="card-img projeto-5"> </div>
					<h5 className="card-title">MongoDB</h5>
					<p className="card-text">Projeto BackEnd em MongoDb para aprender</p>
 					<button className='btn' onClick={redirectFunc4}>Github</button>
					</div>
			
			</div>


		</section>


	



	<footer>
		<p>Paulo Vitor de Farias Borges</p>
		<div class="social">
			<a href="https://www.facebook.com/paulovitor.borges.3"><i class="fab fa-facebook-f"></i></a>

			<a href="https://www.instagram.com/paulovitor.borges.3"><i class="fab fa-instagram"></i></a>

			<a href="https://www.linkedin.com/in/paulo-vitor-de-farias-borges-333368206"><i class="fab fa-linkedin"></i></a>

		
		
		</div>
	</footer>
</>
	
);
}

export default index;
import {useEffect,useRef} from "react"
import Image from "next/image"
import style from "./services/sections.module.css"
import audio from "../assets/speaker.png"
import { gsap } from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

 
const kickstart = () => {
  const sectionRef = useRef(null);
  useEffect (()=>{
    gsap.fromTo(".pix",{opacity:0,duration:2,delay:2},{opacity:1,duration:2})
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end:'end end',
        scrub: true,
       
      },
    });
  
    timeline.fromTo('.details',{opacity:0,transition:"all ease 2s",duration:2},{opacity:1,duration:2,transition:"all ease 2s"})

  })

  return (
    <div className={style.kickstart} >
      <div className="pix" style={{position:"relative",width:"100%",opacity:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"500px"}}>
      <Image style={{position:'relative',width:"40%",height:"150%",paddingTop:300}}  src={audio} alt="audio"></Image>
      <h1 style={{color:"#fff",fontSize:"70px",position:"absolute",top:250}}>KICKSTART YOUR BRAND</h1>
      </div>
      <p style={{color:"#fff",paddingTop:50,fontSize:20}}>We start with strategy, ensuring clearly defined goals and a messaging framework
that will serve as the brand’s foundation</p>
      <div className="details" ref={sectionRef} style={{opacity:0,width:"100%",marginTop:80,marginLeft:"100px"}}>

<p style={{color:"#fff",fontSize:30,fontWeight:"100"}}> Create </p>
<p style={{color:"#fff",fontSize:20,fontWeight:"100",width:"60%"}}>We trigger impact on sight. We help you connect with your audience through a distinct
and authentic brand identity

</p>
<div className={style.pack}>
      
       <div className={style.rightcontainer}>
       <div className={style.only2} >      
       
       <div className={`${style.smallcontainer} ${style.div3}`}>
   <h3> Développement de la marque (brand development)</h3>
      <p>Notre service d'accompagnement stratégique vous aide à prendre des décisions éclairées pour votre entreprise en analysant votre marché et votre concurrence, afin de développer une stratégie efficace pour atteindre vos objectifs.


</p>
       </div>
       
       <div className={`${style.smallcontainer} ${style.div4}`}>
   
<h3>Etude de collection (fahsion teckpack)</h3>
           <p>Nous créons des Tech Packs personnalisés en collaboration avec vous pour garantir des productions de vêtements de haute qualité qui répondent à vos besoins spécifiques.
</p>
       </div>
       <div className={`${style.smallcontainer} ${style.div5}`}>
      
    <h3>Etude de lancement</h3>
    <p>Grâce à notre service d'accompagnement technique, optimisez votre production en adoptant les dernières technologies et méthodes. Ensemble, nous développons des processus plus efficaces, réduisant les coûts tout en améliorant la qualité.

</p>
       </div>
       
       <div className={`${style.smallcontainer} ${style.div6}`}>
           <h3>Prototypage</h3>
           <p>Nous sommes une agence de branding spécialisée dans le prototypage de marque, vous permettant d'explorer, tester et affiner vos idées avant leur mise en production, pour garantir le succès de votre marque.</p>
       </div>
       
       <div className={`${style.smallcontainer} ${style.div7}`}>
           <h3>Production</h3>
           <p>Notre service de production repose sur l'utilisation des dernières technologies et méthodes pour optimiser vos processus et réduire les coûts, tout en garantissant une qualité supérieure. Nous collaborons avec vous pour développer des solutions de production efficaces qui répondent à vos besoins spécifiques et vous aident à atteindre vos objectifs.</p>
       </div>
       <div className={`${style.smallcontainer} ${style.div8}`}>

           <h3>Mise en place d’une plateforme logistique 
</h3>
<p>Nous proposons une plateforme logistique complète pour la
gestion et la livraison de vos produits. Nous nous occupons
de toutes les étapes du processus, de la gestion des stocks
à la livraison des produits chez vos clients. Nous veillons à
ce que vos produits soient livrés en toute sécurité et à
temps, afin que vous puissiez vous concentrer sur la
croissance de votre entreprise.
</p>
       </div>
      
       <div className={`${style.smallcontainer} ${style.div9}`}>

<h3>Marketing et communication</h3>
<p>Notre service de marketing vous permet de promouvoir votre marque et
de toucher votre public cible. Nous travaillons avec vous pour élaborer
des stratégies de marketing efficaces qui vous permettent d'atteindre
vos objectifs de vente.</p>
      </div>
       
       
       <div className={`${style.smallcontainer} ${style.div10}`}>

    
<h3>Etablissement des canaux de distribution (E-commerce website, dépôt & point de vente, 
)</h3>
<p>Notre expertise nous permet de mettre en œuvre des solutions stratégiques qui maximisent votre visibilité, atteignent votre audience cible et favorisent la croissance de votre activité. Avec notre soutien dans l'établissement des canaux de distribution, vous pouvez étendre votre portée, accroître votre présence sur le marché et offrir une expérience de vente cohérente et attrayante à vos clients.</p>

      

       </div>
       
       <div className={`${style.smallcontainer} ${style.div11}`}>

           <h3>Shooting</h3>
           <p>Notre service de shooting vous permet de mettre en avant vos produits
et de créer du contenu visuel attractif. Nous travaillons avec vous pour
organiser des sessions de shooting créatives qui mettent en valeur votre
marque et votre style.</p>
       </div>
       
       <div className={`${style.smallcontainer} ${style.div12}`}>

 <h3>Organisation d’événement de lancement</h3>
 <p>Notre service de planification d'événements vous permet
d'organiser des événements mémorables qui reflètent votre
marque et vos valeurs. Nous travaillons avec vous pour
planifier et organiser chaque détail de votre événement, en
veillant à ce que tout soit fait selon vos attentes</p>
       </div> 
       
      </div>
   
    </div>

       </div>
      </div>
    </div>
  )
}

export default kickstart
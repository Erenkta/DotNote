import "./about.css"

export default function About() {
  return (
    <div className="container">
      <div className="about">
      <h1 className="title">About My Project</h1>
        <p>
          Bu tasarladığım projede amacım daha önce eğitimlerimde öğrenmiş olduğum şeylerin
          pratiğini yaparak ve biraz da üstüne koyarak kendimi geliştirmek.
          React ve Springboot alanındaki teknolojilere hakim olmak
          Html, Css, React, Springboot alanlarında kendimi daha da 
          ilerletmek ve pratik kazanmak amacıyla bu projeyi geliştiriyorum.
        </p>
      </div>
      <div className="about">
      <h1 className="title">Bu projede kullanılanlar</h1>
      <p>
        <h1>Frontend</h1>
        -React <br/>
        -i18n <br/>
        -React router <br/>
        -Axios <br/>
        -Toastify <br/>
       <br/> <h1>Backend</h1>
        -Spring <br/>
        -H2 Database <br/>

        

      </p>
      </div>
    </div>
  )
}

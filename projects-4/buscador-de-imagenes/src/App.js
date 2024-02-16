import { Formik, Form, Field } from "formik";
import { useState } from "react";
import "./header.css"
import "./content.css"
import "./article.css"

// async se significa llamar a una api
const App = () => {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({photos});
  return (
    <div>
      <header>
        <Formik
        initialValues={{search: ""}}
        onSubmit={async values => {
          const response = 
          await fetch 
          (`https://api.unsplash.com/search/photos?per_page=21&query=${values.search}`, 
          {headers: 
            {"Authorization": "Client-ID QjZfV_-8WEhvQDdYGdjhxK5U7HEHZvTG_-O10KCBTsQ"}
          })
          const data = await response.json()
          // LLAMAR A LA API DE UNSPLASh
          setPhotos(data.results)
        }} 
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
        {photos.map(photo => 
        <section 
        key={photo.id} 
        onClick={() => open(photo.links.html)}>
          <img src={photo.urls.regular}></img>
        </section>
        )}

        </div>
      </div>
    </div>
  );
}

export default App;

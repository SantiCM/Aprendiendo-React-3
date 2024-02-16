import NewsletterSignup from '../components/NewsletterSignup';
import PageContent from '../components/PageContent';


function NewsletterPage() {
  
  return (
  
  <PageContent title="Join our awesome newsletter!">
  
    <NewsletterSignup />
  
    </PageContent>
  
  );

}

export default NewsletterPage;

// damos la accion
export async function Action({ request }) {

  // recojemos la data del await del request de form data
  const data = await request.formData();

  // tomamos el email que viene de data del get del email
  const email = data.get('email');

  // send to backend newsletter server ...

  console.log(email);

  // damos un mensaje de si paso
  return { message: 'Signup successful!' };

}
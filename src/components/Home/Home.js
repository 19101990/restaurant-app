import Banner from "../Banner/Banner"
import Menu from "../menu/Menu"


function Home() {
  return (
    <main>
      <section className="banners">
        <Banner bgImg="https://images.unsplash.com/photo-1634233822115-4eb18731fd76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" heading="Heading" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie faucibus leo quis ultricies. Ut porttitor leo volutpat ligula ultricies, quis ullamcorper nibh ultrices." link="#" width="100" height="700" />
        <Banner bgImg="https://images.unsplash.com/photo-1611915365928-565c527a0590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80" heading="Heading" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie faucibus leo quis ultricies." link="#" width="50" height="500" />
        <Banner bgImg="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" heading="Heading" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo volutpat ligula ultricies, quis ullamcorper nibh ultrices." link="#" width="50" height="500" />
      </section>
      <section>
        <Menu />
      </section>
    </main>
  );
}
export default Home;
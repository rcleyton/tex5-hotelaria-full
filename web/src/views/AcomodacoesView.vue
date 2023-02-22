<template>
  <Titlecomponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </Titlecomponent>

  <main class="principal">
      <h2 class="text_acomodacao">Nossas Acomodações</h2>

      <section class="container">
        <article>
          <figure>
            <img
              src="../assets/images/quarto_1.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>
        <article>
          <figure>
            <img
              src="../assets/images/quarto_9.png"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quarto_2.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quarto_3.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quarto_4.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quarto_5.png"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quarto_6.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quarto_7.png"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quarto_8.png"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>
      </section>

      <section>
        <article class="produto_destaque">
          <div class="texto">
            <h2>Produto em Destaque</h2>
            <p>
              Aconchegante apartamento Superior Suíte Double de aproximadamente 35m²
              com vista para o mar. Quarto com varanda,
              cama de casal, Queen ou King Size, ar-condicionado, WI-FI, TV LED 50”, piscina privada,
              telefones, minibar, amenities, secador de cabelo, mesa de trabalho, cofre,
              roupão, chinelo e muito mais.
            </p>
          </div>

          <div class="imagem">
            <figure>
              <img
                src="../assets/images/casal.jpg"
                alt="Lorem ipsum"
                class="quarto_destaque"
              />
              <figcaption>Superior Suíte Double</figcaption>
            </figure>
          </div>
        </article>
      </section>
    </main>

</template>


<script>
import Titlecomponent from "@/components/Titlecomponent.vue";


export default {
  name: "InicioView",
  components: {
    Titlecomponent
  }
}
</script>
<style>
.principal{
    color: black;
    background: #005500;
    margin-top: 11vh;
    text-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    flex-direction: column;
}
.principal h2{
        color: crimson;
        font-size: 1.5rem;
        padding-top:1rem;
}
.container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.container article {
    width: 25%;
    margin: 1rem;
    }


.produto_destaque{
    border:2px solid black;
    margin: 1rem;
}

.produto_destaque p {
   width: 60%;
   text-align: justify;
    margin: 1rem auto;
 }
.produto_destaque .quarto_destaque{
    width: 60%;
 }

.produto_destaque figcaption{
     margin: 1rem;
 }
</style>

<template>
  
  <Titlecomponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </Titlecomponent>

  <main class="main">
      <div class="contato">
        <fieldset class="informacao_de_contato">
          <legend class="titulo_da_secao">Fale Conosco</legend>
          <div class="info">
            <ul>
            <li>R. Dep. Laércio Corte, 1501 - Panamby, São Paulo</li>
            <li>+55 (11) 9999 - 9999</li>
            <li>+55 (11) 9999 - 9999</li>
            <li>reservas@texhotel.com</li>
          </ul>
          </div>
        </fieldset>

        <form class="form" action="" method="post" enctype="multipart/form-data">
          <fieldset class="informacao_de_contato">
            <legend class="titulo_da_secao">Deixe Seus Dados Conosco</legend>  
                <ul>
                  <li class="nome">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu Nome" required />
                  </li>
                  <li class="email">
                    <label  for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu Email" required />
                  </li>
                   <li class="telefone">
                    <label for="telefone">Telefone</label>
                    <input type="number" id="telefone" name="telefone" placeholder="Digite seu Número" required />
                  </li>
                  <li class="assunto" >
                    <label for="tipo_servico">Assunto</label>
                    <select class="select" name="serviso" id="serviso">
                      <option value="auto_select">Selecione uma Opção</option>
                      <option id="cancela_reserva">
                        Cancelamento de Reserva
                      </option>
                      <option value="ouvidoria">Ouvidoria</option>
                      <option value="departamento_financeiro">
                        Departamento financeiro
                      </option>
                      <option value="datas">Remarcação de datas</option>
                      <option value="feedback">Reclamações/Opiniões</option>
                    </select>
                  </li>
                  <li >
                    <label class="mensage" for="mensagem">Mensagem</label>
                    <textarea class="textarea" name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
                  </li>
                  <li>
                    <button class="button" >Enviar Mensagem</button>
                  </li>
                </ul>
            </fieldset>    
          </form>
          
      </div>
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
.main {
    width: 100%;
    height: 71vh;
    background: black;
}

/*form*/
.contato {
    display: flex;
    width: 80%;
    margin: auto;
    margin-top: 2%;
}

.informacao_de_contato {
    width: 50%;
    margin: 50px 50px 50px 0;
    align-items: center;
    border: 1px solid blue;
    box-shadow: 7px 9px 3px green;
    color: #999;
} 
.informacao_de_contato legend {
        text-align: center;
}


.info {
    margin-top: 10px;
    margin-left: 20px;
    text-transform: uppercase;
    text-align: center;
    margin: 15% 5%;
}

.contato ul {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.info ul li {
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.informacao_de_contato ul li{
            width: 100%;
            font-weight: 700;
            font-size: 1rem;
            color: #999;
            text-transform: uppercase;
}

.informacao_de_contato input {
        width: 90%;
        margin-top: 10px;
        padding: 20px 0;
        height: 30px;
        background-color: #fff;
        border: none;
        text-indent: 1rem;
    }
.informacao_de_contato label {
        font-size: 15px;
        display: flex;
    }


.select {
    width: 40%;
    height: 35px;
    margin-top: 10px;
    background-color: #fff;
    border: none;
    text-indent: 1rem;
    color: gray;
}

.titulo_da_secao {
    font-size: 30px;
    font-weight: bold;
}

.nome, .email, .telefone, .assunto, .mensage {
    margin: 1rem 0 0 1rem;
}

.textarea {
    width: 80%;
    height: 60px;
    margin-top: 10px;
    margin-left: 20px;
    border: none;
    resize:none;
}

.informacao_de_contato button {
        border: none;
        background-color: #ffff;
        color: #999;
        margin: 1rem;
        padding: .7rem;
        cursor: pointer;
        transition: .5s;
        border-radius: 5px;
}
.informacao_de_contato:hover {
            opacity: .9;
            transition: .5s;
        }

.informacao_de_contato textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 

</style>
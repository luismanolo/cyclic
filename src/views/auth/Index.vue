<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="6">
            <h1>Entrar</h1>
            <p class="text-medium-emphasis">Introduce tus datos parar empezar.</p>

            <!-- <VForm class="mt-7" @submit.prevent="login"> -->
            <VForm class="mt-7">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="credentials.email">Email</label>
                <!-- <VTextField :rules="[ruleRequired, ruleEmail]" v-model="credentials.email" -->
                <!--   prepend-inner-icon="fluent:mail-24-regular" id="email" name="email" type="email" /> -->
                <VTextField v-model="credentials.email"
                  prepend-inner-icon="fluent:mail-24-regular" id="email" name="email" type="email" />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="credentials.password">Contraseña</label>
                <!-- <VTextField :rules="[ruleRequired, rulePassLen]" v-model="credentials.password" -->
                <!--   prepend-inner-icon="fluent:password-20-regular" id="password" name="password" type="password" /> -->
                <VTextField v-model="credentials.password"
                  prepend-inner-icon="fluent:password-20-regular" id="password" name="password" type="password" />
              </div>
              <div class="mt-5">
                <VBtn block type="submit" min-height="44" class="gradient primary">Entrar</VBtn>
              </div>
            </VForm>
            <p class="text-body-2 mt-10">
              <!-- <v-btn to="/reset-password" class="font-weight-bold text-primary">¿Contraseña perdida?</v-btn> -->
              <v-btn class="font-weight-bold text-primary">¿Contraseña perdida?</v-btn>
            </p>
            <p class="text-body-2 mt-4">
              <span>¿No tienes cuenta?
                <!-- <v-btn to="/signup" class="font-weight-bold text-primary">Crear cuenta</v-btn> -->
                <v-btn class="font-weight-bold text-primary">Crear cuenta</v-btn>
              </span>
            </p>
          </VCol>
        </VRow>
      </VCol>
      <VCol class="hidden-md-and-down fill-height" md="6" lg="7">
        <VImg src="https://wallpaper.dog/large/989422.jpg" cover
          class="h-100 rounded-xl d-flex align-center justify-center">
          <div class="text-center w-50 text-white mx-auto">
            <h2 class="mb-1">Comenzando aquí tu recorrido virtual...</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore quia.
              Dolorum dolores ad ipsum voluptatum rem, hic placeat, odio, odit numquam quod
              veritatis accusantium assumenda! Sequi, provident in! Iure!
            </p>
          </div>
        </VImg>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      }
    }
  }

}

</script>

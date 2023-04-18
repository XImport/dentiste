<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <v-img
        lazy-src="https://img.freepik.com/free-photo/beautiful-girl-sitting-dentist-s-office_1157-21014.jpg?w=1380&t=st=1681844286~exp=1681844886~hmac=f4c2a237ec68c37079d6ef76ff5cdd43c8956c4653ca5efa87226a9ec184a726"
        max-height="150"
        max-width="250"
        src="https://img.freepik.com/free-photo/beautiful-girl-sitting-dentist-s-office_1157-21014.jpg?w=1380&t=st=1681844286~exp=1681844886~hmac=f4c2a237ec68c37079d6ef76ff5cdd43c8956c4653ca5efa87226a9ec184a726"
      ></v-img>
      <v-img
        lazy-src="https://img.freepik.com/free-photo/dentist-doing-check-up-patient_23-2149206225.jpg?w=1380&t=st=1681844291~exp=1681844891~hmac=958387efe28960db969a9aaf4887b0384d4fed476ccd29ae2c425dc71d9e1c78"
        max-height="150"
        max-width="250"
        src="https://img.freepik.com/free-photo/dentist-doing-check-up-patient_23-2149206225.jpg?w=1380&t=st=1681844291~exp=1681844891~hmac=958387efe28960db969a9aaf4887b0384d4fed476ccd29ae2c425dc71d9e1c78"
      ></v-img>
      <v-img
        lazy-src="https://img.freepik.com/free-photo/dentist-with-smile_144627-887.jpg?w=826&t=st=1681844397~exp=1681844997~hmac=53856ea69fe51b18c4a1a31d289afa4b83079a432bffb7b614ac0db9ded939e4"
        max-height="150"
        max-width="250"
        src="https://img.freepik.com/free-photo/dentist-with-smile_144627-887.jpg?w=826&t=st=1681844397~exp=1681844997~hmac=53856ea69fe51b18c4a1a31d289afa4b83079a432bffb7b614ac0db9ded939e4"
      ></v-img>
      <v-img
        lazy-src="https://img.freepik.com/premium-photo/perfect-healthy-teeth-smile-woman-teeth-whitening-dental-clinic-patient-image-symbolizes-oral_168410-1773.jpg?w=1060"
        max-height="150"
        max-width="250"
        src="https://img.freepik.com/premium-photo/perfect-healthy-teeth-smile-woman-teeth-whitening-dental-clinic-patient-image-symbolizes-oral_168410-1773.jpg?w=1060"
      ></v-img>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      touchThreshold: 5,
    },
  }),
};
</script>
<style scoped>
button.slick-prev:before,
button.slick-next:before {
  background-color: red !important;
}
</style>

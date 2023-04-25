<template>
  <v-app>
    <NavBar />
    <div>
      <v-lazy
        :min-height="200"
        :options="{ threshold: 0.5 }"
        transition="fade-transition"
      >
        <HeadingColor
          :imagePath="Image"
          :Title="Title"
          :Subtitle="Subtitle"
          :MainTitle="MainTitle"
        />
      </v-lazy>
    </div>
    <div>
      <div class="text-h2 text-center pa-12 mt-12">Notre Cabinet Dentaire</div>
      <v-container class="max-width">
        <v-lazy
          :min-height="200"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <ProjectCard :data="cabinet" />
        </v-lazy>
      </v-container>
    </div>
    <div>
      <div class="text-h2 text-center pa-12 mt-12">Notre derniers projets</div>
      <v-container class="max-width">
        <!-- <ProjectCard /> -->
        <v-lazy
          :min-height="200"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <ProjectCard :data="Projects" />
        </v-lazy>
      </v-container>
    </div>
    <div>
      <div class="text-h2 text-center pa-12 mt-12">Notre Localisation</div>
      <v-container class="max-width">
        <MapLocation />
      </v-container>
    </div>
    <div class="mt-12 pt-12">
      <FooTer />
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import HeadingColor from "@/components/HeadingColor.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import MapLocation from "../components/MapLocation.vue";
import FooTer from "../components/FootTer.vue";
export default {
  name: "CabinetPage",

  components: {
    NavBar,
    HeadingColor,
    ProjectCard,
    MapLocation,
    FooTer,
  },
  data() {
    return {
      Image: "https://i.imgur.com/HPwvKTO.png",
      Title: "intègre et à l'écoute de vos besoins",
      Subtitle: "  Devenir une référence mondiale de la chirurgie dentaire",
      MainTitle: "L'équipe du cabinet",
      cabinet: [
        {
          title: "Salle Dentaire",
          subtitle: "subtitle",
          img: "https://www.prevention-medicale.org/var/pm/storage/images/1/7/9/4/84971-5-fre-FR/urgences-cab-dentaire_750.jpg",
        },
        {
          title: "Couloir",
          subtitle: "subtitle",
          img: "https://www.copernic-archi-interieur.fr/wp-content/uploads/2020/12/travaux-decoration-cabinet-dentaire-Copernic-architecture-interieur.jpg",
        },
        {
          title: "Salle Operation",
          subtitle: "subtitle",
          img: "https://s3.eu-west-3.amazonaws.com/abcdent.pro/files/1890096/detail/img-19.jpg",
        },
        {
          title: "Salle Visiteur",
          subtitle: "subtitle",
          img: "https://www.cabinetdentairecroixrousse.fr/honeditorimg/images/cabinet-dentaire-croix-rousse-lyon2.jpg",
        },
        {
          title: "Salle testement",
          subtitle: "subtitle",
          img: "https://lirp.cdn-website.com/0d3a5184/dms3rep/multi/opt/3-9178962e-640w.png",
        },
        {
          title: "Salle Chirurgie",
          subtitle: "subtitle",
          img: "https://dr-aikem-castex.com/wp-content/uploads/Salle-de-soins-dentaires-du-cabinet.jpg",
        },
        {
          title: "Salle Accueil 1",
          subtitle: "subtitle",
          img: "https://www.cabinet-dentaire-fes.com/uploads/media/3/1605616283/JYYDs02hZv_1605616283.jpg",
        },
        {
          title: "Salle Accueil 2",
          subtitle: "subtitle",
          img: "https://www.dentalam.com/fr/wp-content/uploads/2019/11/dentalam-cabinet.jpg",
        },
      ],

      Projects: [
        {
          title: "Projet 1",
          subtitle: "subtitle",
          img: "https://www.information-dentaire.fr/wp-content/thumbnails/uploads/2017/03/plard-une-tt-width-600-height-630-fill-0-crop-1-bgcolor-f0f2f7.jpg",
        },
        {
          title: "Projet 2",
          subtitle: "subtitle",
          img: "https://www.lefildentaire.com/wp-content/uploads/2018/11/preparation-micro-invasive-terminee.jpg",
        },
        {
          title: "Projet 3",
          subtitle: "subtitle",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQe8io3meL3XVlkaioiqj8dbAm2gBRuTiFAw&usqp=CAU",
        },
        {
          title: "Projet 4",
          subtitle: "subtitle",
          img: "https://centre-dentaire-paris16.fr/sites/S_F67NZBEOAFCMTGFCLNMRTXDQ34/files/1/unnamed_1.jpg",
        },
        {
          title: "Projet 5",
          subtitle: "subtitle",
          img: "https://www.jeromeweinman.com/wp-content/uploads/2020/01/cas-clinique-LE-RESULTAT-DES-SOINS.jpg",
        },
        {
          title: "Projet 6",
          subtitle: "subtitle",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbVeQFk69JHJX5DOmHpsuW51myOO7gOeK29AN91RXGJdBSW0Qxw6XuMUTaF3AFDbb3Aw&usqp=CAU",
        },
        {
          title: "Projet 7",
          subtitle: "subtitle",
          img: "https://dentalexpert.ma/wp-content/uploads/2018/01/GLIC-013-REV-dental-implants-vs-Flippers-vs.-Implants-What-Is-Right-for-You-652x652.jpg",
        },
        {
          title: "Projet 8",
          subtitle: "subtitle",
          img: "https://esthetiquedentairemarrakech.com/assets/img/FacettesDentaires.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.v-carousel {
  margin-top: -5%;
}
.max-width {
  max-width: 70%;
}
@media screen and (max-width: 600px) {
  .v-carousel {
    margin-top: -25%;
  }
  .max-width2 {
    max-width: 100%;
  }
  .max-width {
    max-width: 100%;
  }
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        
    };
</script>

<style lang="scss">

@charset "UTF-8";

@import "~materialize-css/sass/components/mixins";


@import "~vue-materialize/sass/color";
@include do("include-color","black", "base");
@include do("include-color","white", "base");
@import "~vue-materialize/sass/colorProcessor";

@import "~materialize-css/sass/components/variables";
@import "~materialize-css/sass/components/normalize";
@import "~materialize-css/sass/components/typography";
@import "~materialize-css/sass/components/global";

$roboto-font-path: "~materialize-css/fonts/roboto/";
@import "~materialize-css/sass/components/roboto";
@import "~materialize-css/sass/components/icons-material-design"; 
@import "~materialize-css/sass/components/buttons";
@import "~materialize-css/sass/components/grid";
@import "~materialize-css/sass/components/navbar";
@import "~materialize-css/sass/components/preloader";
@import "~vue-materialize/sass/forms";

@import "~materialize-css/sass/components/cards";
@import "~materialize-css/sass/components/sideNav";
@import "~materialize-css/sass/components/dropdown";
@import "~materialize-css/sass/components/modal";
@import "~materialize-css/sass/components/collapsible";
@import "~materialize-css/sass/components/table_of_contents"; 
@import "~materialize-css/sass/components/forms/input-fields";

@import "~materialize-css/sass/components/forms/checkboxes";
@import "~materialize-css/sass/components/forms/radio-buttons";

@import "~materialize-css/sass/components/forms/switches";
@import "~materialize-css/sass/components/forms/select";
@import "~materialize-css/sass/components/toast";
@import "~materialize-css/sass/components/tooltip";

</style>

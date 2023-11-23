<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>Školy v Hradci Králové</h1>

{#each data.body.schools as school}
    <div class="school">
        <h2>{school.properties.nazev}</h2>
        <p>{school.properties.zarizeni_druh}</p>
        <p>{school.properties.www}</p>
    </div>
{/each}

<style>
    .school {
        margin-bottom: 1rem;
    }
</style>
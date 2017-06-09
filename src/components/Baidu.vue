<template>
    <div>
        <button class="primary circular">
            <i class="on-center">mail</i>
        </button>
        <div class="card">
            <div class="card-content">
                Card Content
            </div>
        </div>
        <label>
            <q-checkbox v-model="checked"></q-checkbox>
            Checkbox Label
        </label>
        <q-chips v-model="model" placeholder="Type some names"></q-chips>
        <q-datetime v-model="date" type="date"></q-datetime>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: true,
                model: ["421"],
                date:""
            }
        }
    }

</script>
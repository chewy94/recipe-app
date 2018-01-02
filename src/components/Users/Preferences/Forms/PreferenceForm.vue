<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card-text>Please fill out the follow fields. We use this information to deliver better recipe results. All of this info will be private unless you choose to make it public.</v-card-text>
        <v-form v-model="valid" ref="preferenceForm">
          <v-tabs v-model="activeTab">
            <v-tabs-items>
              <v-tabs-content id="name">
                <v-text-field
                  name="name"
                  label="Enter your full name"
                  v-model="name"
                  :rules="nameRules"
                  required
                ></v-text-field>
                <v-btn block :disabled="!valid" @click="validate(); activeTab = 'birthday';">Save</v-btn>
              </v-tabs-content>
              <v-tabs-content id="birthday" lazy>
                <v-menu
                  lazy
                  :close-on-content-click="false"
                  v-model="dateMenu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="Enter your birthdate"
                    v-model="dateFormatted"
                    prepend-icon="event"
                    :rules="dateRules"
                    @blur="date = parseDate(dateFormatted)"
                    required
                  ></v-text-field>
                  <v-date-picker v-model="date" @input="dateFormatted = formatDate($event)" no-title scrollable actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="secondary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="secondary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-menu>
                <v-btn block :disabled="!valid" @click="validate(); activeTab = 'diet'">Save</v-btn>
              </v-tabs-content>
              <v-tabs-content id="diet" lazy>
                <v-select
                  :items="dietTypes"
                  v-model="selectedDiet"
                  label="Choose your diet"
                  autocomplete
                ></v-select>
                <v-btn block :disabled="!valid" @click="submit">Submit</v-btn>
              </v-tabs-content>
            </v-tabs-items>
          </v-tabs>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'name',
      date: null,
      dateFormatted: null,
      dateMenu: false,
      name: null,
      selectedDiet: null,
      valid: true,
      dietTypes: [ 'Meat Eater', 'Vegetarian', 'Vegan', 'Other' ],
      nameRules: [ (v) => !!v || 'Name is required' ],
      dateRules: [ (v) => !!v || 'Birthdate is required' ],
      dietRules: [ (v) => !!v || 'Diet is required' ]
    }
  },
  methods: {
    formatDate (date) {
      if (!date) {
        return null
      }

      const temp = date.split('-')
      const year = temp[0]
      const month = temp[1]
      const day = temp[2]

      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) {
        return null
      }

      const temp = date.split('/')
      const month = temp[0]
      const day = temp[1]
      const year = temp[2]

      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    submit () {
      this.validate
    },
    validate () {
      console.log('We are validating')
      console.log(this.$refs.preferenceForm.validate())
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-tabs v-model="activeTab">
          <v-tabs-items>
            <v-tabs-content id="name" lazy>
              <v-text-field
                name="name"
                label="Enter your full name"
              ></v-text-field>
              <v-btn @click="activeTab = 'birthday'">Save</v-btn>
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
                  @blur="date = parseDate(dateFormatted)"
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
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>
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
      dateMenu: false
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
    }
  }
}
</script>

 
<template>
  <v-row no-gutters class="display-curriculum-page">
    <v-col
      md="6"
      offset-md="3"
      sm="8"
      offset-sm="2"
    >
    <v-row>
    	<v-col>
      	<h1>{{selectedCurriculum.name}}</h1>
      	<p>{{selectedCurriculum.description}}</p>    	
      </v-col>
    </v-row>
    <v-row>
    	<v-col>
    		<v-expansion-panels multipe>
			    <v-expansion-panel
			    	v-for="(section, index) in selectedCurriculum.sections"
			    	:key="index"
			    > 
			      <div>{{section}}</div>
			      <v-expansion-panel-header>Section {{index + 1}} - {{ section.name }}</v-expansion-panel-header>
			      <v-expansion-panel-content>
	            <v-list
						      subheader
						      two-line
						      flat
						    >
						      <v-subheader>Resourses</v-subheader>

						      <v-list-item-group
						        v-model="settings"
						        multiple
						      >
						        <v-list-item
						        	v-for="(resource, j) in section.resoursces"
						        	:key="resource.name + j"
						        >
						          <template v-slot:default="{ active, toggle }">
						            <v-list-item-action>
						              <v-checkbox
						                v-model="active"
						                color="primary"
						                @click="toggle"
						              ></v-checkbox>
						            </v-list-item-action>

						            <v-list-item-content>
						              <v-list-item-title>Notifications</v-list-item-title>
						              <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
						            </v-list-item-content>
						          </template>
						        </v-list-item>


						      </v-list-item-group>
						    </v-list>
		            <v-list
							      subheader
							      two-line
							      flat
							    >
							      <v-subheader>Projects</v-subheader>

							      <v-list-item-group
							        v-model="settings"
							        multiple
							      >
							        <v-list-item>
							          <template v-slot:default="{ active, toggle }">
							            <v-list-item-action>
							              <v-checkbox
							                v-model="active"
							                color="primary"
							                @click="toggle"
							              ></v-checkbox>
							            </v-list-item-action>

							            <v-list-item-content>
							              <v-list-item-title>Notifications</v-list-item-title>
							              <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
							            </v-list-item-content>
							          </template>
							        </v-list-item>

							        <v-list-item>
							          <template v-slot:default="{ active, toggle }">
							            <v-list-item-action>
							              <v-checkbox
							                v-model="active"
							                color="primary"
							                @click="toggle"
							              ></v-checkbox>
							            </v-list-item-action>

							            <v-list-item-content>
							              <v-list-item-title>Sound</v-list-item-title>
							              <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
							            </v-list-item-content>
							          </template>
							        </v-list-item>

							        <v-list-item>
							          <template v-slot:default="{ active, toggle }">
							            <v-list-item-action>
							              <v-checkbox
							                v-model="active"
							                color="primary"
							                @click="toggle"
							              ></v-checkbox>
							            </v-list-item-action>

							            <v-list-item-content>
							              <v-list-item-title>Video sounds</v-list-item-title>
							              <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
							            </v-list-item-content>
							          </template>
							        </v-list-item>

							        <v-list-item>
							          <template v-slot:default="{ active, toggle }">
							            <v-list-item-action>
							              <v-checkbox
							                v-model="active"
							                color="primary"
							                @click="toggle"
							              ></v-checkbox>
							            </v-list-item-action>

							            <v-list-item-content>
							              <v-list-item-title>Invites</v-list-item-title>
							              <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
							            </v-list-item-content>
							          </template>
							        </v-list-item>
							      </v-list-item-group>
							    </v-list>
			      </v-expansion-panel-content>
			    </v-expansion-panel>
			    <v-expansion-panel>
			      <v-expansion-panel-header>Section 2</v-expansion-panel-header>
			      <v-expansion-panel-content>
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit
			      </v-expansion-panel-content>
			    </v-expansion-panel>
			    <v-expansion-panel>
			      <v-expansion-panel-header>Section 3</v-expansion-panel-header>
			      <v-expansion-panel-content>
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit
			      </v-expansion-panel-content>
			    </v-expansion-panel>
			  </v-expansion-panels>
    	</v-col>
    </v-row>
      
    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex'	

export default {
	data() {
		return {
			curriculumId: this.$route.params.id,
			selectedCurriculum: {}
		}
	},
	computed: {
		...mapState(['curriculaData'])
	},
	mounted() {
		this.selectedCurriculum = this.curriculaData.find(item => item.id === this.curriculumId)
	}
}

</script>


<template>
  <v-row no-gutters class="upset-curriculum-page">
  	<v-col
  		md="6"
  		offset-md="3"
  		sm="8"
  		offset-sm="2"
  	>
  	  <v-form>
	  		<div class="page-upset">
		  		<h1>Create Curriculum</h1>
		      <v-btn>Save</v-btn>
				</div>

				<v-row>
		      <v-col cols="3">
		        <v-subheader>Name</v-subheader>
		      </v-col>
		      <v-col cols="9">
		        <v-text-field></v-text-field>
		      </v-col>
	    	</v-row>

	    	<v-row>
		      <v-col cols="3">
		        <v-subheader>Goal</v-subheader>
		      </v-col>
		      <v-col cols="9">
		        <v-text-field></v-text-field>
		      </v-col>
	    	</v-row>

	    	<v-textarea
	    	  solo
	        label="Description"
	      ></v-textarea>

	      <div class="curriculum-list">
			    <v-card
			    	outlined
			    >
			    	<v-card-title class="headline">Sections #1</v-card-title>

			    	<v-card-text>
		    			<v-row no-getters>
					      <v-col cols="3">
					        <v-subheader>Name</v-subheader>
					      </v-col>
					      <v-col cols="9">
					        <v-text-field></v-text-field>
					      </v-col>
				    	</v-row>
				    	<v-row>
					      <v-col cols="3">
					        <v-subheader>Goal</v-subheader>
					      </v-col>
					      <v-col cols="9">
					        <v-text-field></v-text-field>
					      </v-col>
				    	</v-row>
				    	<v-card class="resourse-card">
				    	  <v-card-text>
							    <v-row no-getters>
							      <v-col cols="12">
							        <v-text-field
							        	placeholder="Enter Resourse Link"
							        ></v-text-field>
							      </v-col>
							    </v-row>
							    <v-row no-getters>
							      <v-col cols="12">
							      	<p>List of resourse</p>
							      	<p>List of resourse</p>
							      	<p>List of resourse</p>
							      </v-col>
							    </v-row>
						    </v-card-text>
				    	</v-card>	
				    	<v-card class="project-card">
				    	  <v-card-text>
							    <v-row no-getters>
							      <v-col cols="12">
							        <v-text-field
							        	placeholder="Enter Projects Link"
							        ></v-text-field>
							      </v-col>
							    </v-row>
							    <v-row no-getters>
							      <v-col cols="12">
							      	<p>List of projects</p>
							      	<p>List of projects</p>
							      	<p>List of projects</p>
							      </v-col>
							    </v-row>
						    </v-card-text>
				    	</v-card>
			    	</v-card-text>

					</v-card>				
				</div>
				<v-row>
					<v-col cols="12">
						<v-btn>Add Section</v-btn>
					</v-col>
				</v-row>
			</v-form>	
		</v-col>
  </v-row>
  
</template>

<script>

export default {
  name: 'Upset'
}
</script>

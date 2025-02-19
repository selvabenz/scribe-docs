module.exports = {
  
  Sribe: [
    {
      type: 'category',
      label: 'Getting-Started',
      items: [
        'scribe/Getting-Started/p0-1-what-is-scribe',
        'scribe/Getting-Started/p0-2-system requirement',
        'scribe/Getting-Started/p0-3-installation',
        'scribe/Getting-Started/p0-4-create a new account',
 
      ],
    },
    {
      type: 'category',
      label: 'Basic Setup',
      items: [
        "scribe/Basic Setup/p1-1-profile",
        "scribe/Basic Setup/p1-2-app-language",
        "scribe/Basic Setup/p1-3-notifications",
      ],
    },

    {
      type: 'category',
      label: 'Manage Project',
      items: [
        {
        "Create a Project": [
          "scribe/Manage Project/Create a Project/p2-1-new project",
          "scribe/Manage Project/Create a Project/p2-2-advanced settings",
                
        ],
        },

        {
          "Projects": [
           
            "scribe/Manage Project/Projects/p3-1-projects",
            "scribe/Manage Project/Projects/p3-2-edit project details",
            "scribe/Manage Project/Projects/p3-3-importproject",
            "scribe/Manage Project/Projects/p3-4-offlinemerge",
            "scribe/Manage Project/Projects/p3-5-archive project",
            "scribe/Manage Project/Projects/p3-6-export project",
            "scribe/Manage Project/Projects/p3-7-sync",
            "scribe/Manage Project/Projects/p3-8-backup",
           
                  
          ],
          },


        

      ],
    },
     {
      type: 'category',
      label: 'Modes',
      items: [
        "scribe/Modes/p4-1-overview",
       
        {
          "Common Functionality": [
            "scribe/Modes/Common Functionality/p5-1-layout",
            "scribe/Modes/Common Functionality/p5-2-resources",            
            "scribe/Modes/Common Functionality/p5-3-font size",
            "scribe/Modes/Common Functionality/p5-4-Sync",
           
          ],
        },
        {
          "Text Bible Translation (BT)": [
            // "scribe/Modes/Text Bible Translation/p6-1-editing text",
             "scribe/Modes/Text Bible Translation/p6-2-navigationlock",
             "scribe/Modes/Text Bible Translation/p6-3-bookmarks",
           
          ],
        },
        {
          "Oral Bible Translation (OBT)": [
            "scribe/Modes/Oral Bible Translation/p7-1-audio toolbar",           
           
          ],
        },


        {
          "Open Bible Stories (OBS)": [
            "scribe/Modes/Open Bible Stories/p8-1-drafting",
                       
          ],
        },
             
        
      ],
    },
    {
      type: 'category',
      label: 'How to',
      items: [
        "scribe/How-to/p9-1-scripture burrito",
        "scribe/How-to/p9-2-offlineupload",
       
              
          ],
        },
    // {
    //   type: 'doc',
    //   label: 'Migration guide from translationstudio',
    //   id: 'scribe/p11-1-migration guide',
    // },
    {
      type: 'doc',
      label: 'About',
      id: 'scribe/p11-02-about',
    },

    {
      type: 'doc',
      label: 'Technical Support',
      id: 'scribe/p11-03-technical support',
    }
  ],
};
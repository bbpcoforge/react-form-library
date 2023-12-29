export const json = {
  title: "Update Your Information",
  logoWidth: "60px",
  pages: [
    {
      name: "Step 3",
      elements: [
        {
          type: "panel",
          name: "panel3",
          elements: [
            {
              type: "image",
              name: "question2",
              width: "20%",
              minWidth: "auto",
              indent: 2,
              descriptionLocation: "underTitle",
              imageLink:
                "data:image/png;base64,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",
              imageFit: "cover",
              imageHeight: "50",
              imageWidth: "",
            },
            {
              type: "html",
              name: "question3",
              startWithNewLine: false,
              html: "<h6>Your Business details</h6>",
            },
            {
              type: "text",
              name: "BusinessType",
              useDisplayValuesInDynamicTexts: false,
              title: "Business Type",
              description: "Private Limited Company",
              hideNumber: true,
              valueName: "Private Limited Company",
            },
            {
              type: "boolean",
              name: "BusinessTypeConfirmation",
              title: "Is this information correct?",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "IsBusinessActive",
              title: "Is your business still active?",
              description:
                "Active means your business is still trading in some capacity",
              hideNumber: true,
            },
          ],
        },
      ],
      title: "Your business details",
    },
    {
      name: "Step 4",
      elements: [
        {
          type: "panel",
          name: "panel1",
          elements: [
            {
              type: "image",
              name: "question1",
              width: "20%",
              minWidth: "auto",
              descriptionLocation: "underTitle",
              imageLink:
                "data:image/png;base64,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",
              imageFit: "cover",
              imageHeight: "auto",
              imageWidth: "100%",
            },
            {
              type: "panel",
              name: "panel2",
              elements: [
                {
                  type: "html",
                  name: "question4",
                  startWithNewLine: false,
                  html: "<h6>Your business operations</h6>",
                },
              ],
              startWithNewLine: false,
            },
            {
              type: "checkbox",
              name: "BusinessActivity",
              title: "Business activity",
              description:
                "Please select the action that best describe the activity of your business",
              hideNumber: true,
              choices: [
                {
                  value: "Item 1",
                  text: "Activities Extraterritorial Organization & Bodies",
                },
                {
                  value: "Item 2",
                  text: "None of the above",
                },
              ],
            },
            {
              type: "boolean",
              name: "activityConfirmation",
              title: " ",
              description:
                "Is your business involved in crowd funding, defense, virtual currency?",
              hideNumber: true,
            },
            {
              type: "comment",
              name: "activityDetails",
              title:
                "Please provide some more details of activity you perform as business",
              description:
                "Please include the broader description of your activity and if applicable, the number of outlets and locations you operate form and types of suppliers you deal with. ",
              hideNumber: true,
            },
            {
              type: "radiogroup",
              name: "question6",
              title: "How are direct costomer of your business?",
              hideNumber: true,
              choices: [
                {
                  value: "Item 1",
                  text: "Individuals",
                },
                {
                  value: "Item 2",
                  text: "Businesses",
                },
                {
                  value: "Item 3",
                  text: "Both",
                },
              ],
              colCount: 3,
            },
            {
              type: "html",
              name: "question5",
              html: '<div style="background:#ffffff; padding:5px; margin:10px">\n<h6>International business</h6>\n<div style="background:#dcf2f0; padding:5px; margin:10px">\n<p>We need to make sure that the information we hold about you is up to date.</p>\n<p>This is to keep you safe  and to meet our legal and UK regulatory obligations.</p>\n</div>\n<p>This is to keep you safe  and to meet our legal and UK regulatory obligations.</p>\n</div>',
            },
            {
              type: "boolean",
              name: "question7",
              title:
                "Do you receive any indirect revenue from or facilitate movement of fund",
              hideNumber: true,
            },
            {
              type: "dropdown",
              name: "question8",
              title: "Which country",
              hideNumber: true,
              choices: ["Item 1", "Item 2", "Item 3"],
            },
            {
              type: "boolean",
              name: "question9",
              title: "Do you need to add another country?",
              hideNumber: true,
            },
          ],
        },
      ],
      title: "Your business operations",
    },
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "question10",
          title: "Approximate turnover for the last 12 month",
          description:
            "This is your total business sales over the last 12 calendar months.",
          hideNumber: true,
          placeholder: "£",
        },
        {
          type: "text",
          name: "question11",
          title: "Approximate turnover for the next 12 month",
          description:
            "This is an estimate of your total business sales over next year. We appreciate that in the current climate it may be difficult to predict future sales. Please provide your best estimate.",
          hideNumber: true,
          placeholder: "£",
        },
        {
          type: "boolean",
          name: "question12",
          title: "Is SNTDR your main business current account provider?",
          hideNumber: true,
        },
        {
          type: "boolean",
          name: "question13",
          title:
            "Do you have a business relationship with any bank other than SNTDR?",
          hideNumber: true,
        },
      ],
      title: "Your business finances",
    },
    {
      name: "page2",
      elements: [
        {
          type: "panel",
          name: "panel4",
          elements: [
            {
              type: "html",
              name: "question14",
              html: '<div style="background:#ffffff; padding:5px; margin:10px">\n<h6>Business owner 1</h6>\n<div style="background:#dcf2f0; padding:5px; margin:10px">\n<p>These details are for owner(s) of the business</p>\n</div>\n</div>',
            },
          ],
        },
        {
          type: "panel",
          name: "panel5",
          elements: [
            {
              type: "html",
              name: "question16",
              title: "Personal",
              html: "<h6>Personal Information</h6>",
            },
            {
              type: "dropdown",
              name: "question17",
              title: "Title",
              hideNumber: true,
              choices: [
                {
                  value: "Item 1",
                  text: "Mr.",
                },
                {
                  value: "Item 2",
                  text: "Mrs.",
                },
                "Item 3",
              ],
            },
            {
              type: "text",
              name: "question15",
              title: "Name",
              hideNumber: true,
            },
            {
              type: "text",
              name: "question18",
              title: "Business role",
              hideNumber: true,
            },
            {
              type: "text",
              name: "question19",
              title: "Date of birth",
              hideNumber: true,
            },
            {
              type: "text",
              name: "question20",
              title: "Home address",
              hideNumber: true,
            },
            {
              type: "text",
              name: "question21",
              title: "Prefered contact number",
              hideNumber: true,
            },
            {
              type: "text",
              name: "question22",
              title: "Email address",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "question23",
              title: "Is this information correct?",
              hideNumber: true,
            },
          ],
        },
      ],
      title: "Ownership and signatory ",
    },
    {
      name: "page3",
      elements: [
        {
          type: "html",
          name: "question24",
          html: '<div style="background:#ffffff; padding:5px; margin:10px">\n<h6>Declarations</h6>\n<div style="">\n<b>By selecting "Submit" below:</b>\n<p>You confirm that the details are accurate. We need to make sure that the information we hold about you is up to date.</p>\n<p>This is to keep you safe  and to meet our legal and UK regulatory obligations.</p>\n</div>\n<ul style="list-style-type:disc">\n<li>Please  provide this information as soon as possible.</li>\n<li>If you don\'t receive the required information, we may need to restrict usage of your account(s).</li>\n<li>This ma result in you not being able to use your card, withdraw cash, make purchases or transfer money.</li>\n</ul>\n</div>',
        },
        {
          type: "checkbox",
          name: "question25",
          title: " ",
          hideNumber: true,
          choices: [
            {
              value: "Item 1",
              text: "I agree to the declarations and sanctions statement",
            },
          ],
        },
      ],
      title: "Review and update",
    },
  ],
  showTitle: false,
  showTOC: true,
  widthMode: "responsive",
  fitToContainer: true,
  headerView: "advanced",
};

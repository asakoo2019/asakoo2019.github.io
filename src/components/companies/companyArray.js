const companyCategoryArr = [
    'Finance/Banking/Insurance',
    'Information technologies',
    'Design/Architecture/Construction',
    'Consulting/ Legal',
    'Import/Export/Trade',
    'Marketing/Advertising/PR',
    'Tourism/Hospitality/Entertainment',
    'Medical/Pharmaceutical',
    'Sports /Beauty',
    'Education',
    'Retail business',
    'NGO/International organization',
    'Services',
    'Mining/Manufacturing/Production',
    'Online Service',
];
const createData = () => {
    class Company {
      constructor(companyName, registerName, companyCreatingData, id, email, companyViewCount, aboutCompany, companyJobs, companyCategory) { 
        this.companyName = companyName;
        this.registerName = registerName;
        this.companyCreatingData = companyCreatingData;
        this.id = id;
        this.email = `${email}@mail.ru`;
        this.registrationType = 'emloyer';
        this.companyViewCount = companyViewCount;
        this.aboutCompany = aboutCompany;  
        this.companyImage = "https://library.kissclipart.com/20180922/eve/kissclipart-icon-full-name-clipart-computer-icons-avatar-icon-f6cf26ff2213f36e.jpg";
        this.companyBackground = 'http://braingapps.com/wp-content/uploads/2013/08/some-company.png';
        this.companyJobs = companyJobs;
        this.companyWebsite =  null;
        this.companyCategory =  companyCategory;
        this.userCity =  'Yerevan';
        this.userCountry =  'Armenia';
      }
    }
    let data = [];
    let c = 0;
    let companyName = 'compName';
    let registerName = 'regName';
    let companyCreatingData = 1910
    for (let i = 0; i < 100; i++){
      let id  = `${i}`;
      let email = companyName + '_' + i;
      let companyViewCount = Math.floor(Math.random() * 100) + 1;
      let companyJobs = [];
      if (i%2 === 0){
        companyJobs = [1, 2, 3, 4]
        // companyJobs.length = Math.floor(Math.random() * 10) + 1;
      }
      let aboutCompany = '';
      if (i%2 === 0){
        aboutCompany = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
      let companyCategory = '';
      if (c < 12){
        companyCategory = companyCategoryArr[c++]
      } else {
        c = 0;
        companyCategory = companyCategoryArr[c++]
    }
    let comp = new Company(companyName + '_' + i, registerName + '_' + i, companyCreatingData++, id, email, companyViewCount, aboutCompany, companyJobs, companyCategory)
    data.push(comp);
    }
    return data
  }
  const data = createData(); 
  export default data;

    // const companies = [...dataArray];
      // let result = []
      // setLength(companies.length);
      // const typeLength = type.length;
      // if (typeLength) {
      //   companies.forEach(item => {
      //     for (let i = 0; i < typeLength; i++) {
      //       if (type[i] === item.companyCategory) {
      //         result.push(item)
      //       }
      //     }
      //   })
      // }
      // if (!result.length) result = companies;
      // result.sort((a, b) => b.companyViewCount - a.companyViewCount);
      // setData(result);
      // setNoData('')
import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import home from '../views/home'
import main from '../views/main'
import login from '../views/login'
import findpwd from '../views/findpwd'
import regedit from '../views/regedit'

import law from '../views/law'
import dropInBox from '../views/dropIn-Box'
import socialSecurityInfo from '../views/Info-socialSecurity'
import myCollection from '../views/Info-myCollection'

import enpverify from '../components/enp/enp-enpVerify'
import enpmanagejobs from '../components/enp/enp-enpManageJobs'

import jobsMainDetail from '../components/jobs/jobs-mainDetail'
import jobsCompanyRecord from '../components/jobs/jobs-companyRecord'
import jobsCompanyJobsLists from '../components/jobs/jobs-companyJobs'
import consultJobs from '../components/jobs/jobs-consultJobs'
import recruitInfo from '../components/jobs/jobs-recruitInfo'
import huntingJobs from '../components/jobs/jobs-huntingJobs'


Vue.use(Router)

const router =new Router({
  routes: [
    {
      path: '/',
      component:main,
      children:[
        {
          path:'/',
          name:'indexPage',
          component:index
        },
        {
          path: '/jobsMainDetail',
          name: 'jobsMainDetail',
          component: jobsMainDetail
        },
        {
          path: '/jobsCompanyRecord',  // 公司档案
          name: 'jobsCompanyRecord',
          component: jobsCompanyRecord
        },
        {
          path:'/jobsCompanyJobsLists', // 公司职位列表
          name:'jobsCompanyJobsLists',
          component:jobsCompanyJobsLists
        },
        {
          path:'/consultJobs', // 咨询工作
          name:'consultJobs',
          component:consultJobs
        },
        {
          path:'/recruitInfo', // 职位信息
          name:'recruitInfo',
          component:recruitInfo
        },
        {
          path:'/huntingJobs', // 搜猎职位
          name:'huntingJobs',
          component:huntingJobs,
        },
        {
          path:"/law",
          name:'law',
          component:law
        },
        {
          path:"/dropInBox",
          name:'dropInBox',
          component:dropInBox,
        },
        {
          path:'/enpvertify', // 企业审核
          name:'enpvertify',
          component:enpverify
        },
        {
          path:'/enpmanagejobs', // 企业编辑职位信息
          name:'enpmanagejobs',
          component:enpmanagejobs
        },
        {
          path:'/socialSecurityInfo',
          name:'socialSecurityInfo',
          component:socialSecurityInfo,
        },
        {
          path:'/myCollection',
          name:'myCollection',
          component:myCollection,
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/findpwd',
      name:'findpwd',
      component:findpwd
    },
    {
      path:'/regedit',
      name:'regedit',
      component:regedit
    },
    
  ]
})

export default router
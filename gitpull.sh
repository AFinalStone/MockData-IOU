moduleArr=(HM-BaseBiz HM-Network HM-SocialShare HM-Uikit HM-Logger HM-News HM-Tools HM_ShareData IOU)
rootDir=`pwd`
echo $rootDir
for module in ${moduleArr[@]}
do
  echo "--------------开始操作"${module}"--------------"
  cd $rootDir
  cd ./${module}
  git checkout dev 
  git pull
  echo "--------------操作完毕-------------------------"
done


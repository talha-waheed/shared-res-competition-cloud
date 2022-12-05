kubectl taint nodes minikube-m02 nodeGroup=excl1:NoSchedule
kubectl taint nodes minikube-m03 nodeGroup=shared:NoSchedule
kubectl taint nodes minikube-m04 nodeGroup=excl2:NoSchedule
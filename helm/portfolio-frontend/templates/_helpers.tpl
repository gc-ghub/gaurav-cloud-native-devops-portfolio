{{/* Generate a fullname for resources */}}
{{- define "portfolio-frontend.fullname" -}}
{{- printf "%s-%s" .Release.Name "frontend" | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- define "microservice.labels" -}}
app.kubernetes.io/name: {{ .Release.Name }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- if .Values.commitSha }}
app.kubernetes.io/commit-sha: {{ .Values.commitSha }}
{{- end }}
{{- end }}

{{- define "microservice.selectorLabels" -}}
app.kubernetes.io/name: {{ .Release.Name }}
{{- end }}

FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3500

WORKDIR /app

RUN addgroup --system bff && \
          adduser --system -G bff bff

COPY dist/apps/client/bff bff/
RUN chown -R bff:bff .

RUN npm --prefix bff --omit=dev -f install

CMD [ "node", "bff" ]

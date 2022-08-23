#!/bin/bash

function copy_files()
{
    files=("$@")
    for i in "${files[@]}"
    do
        echo "Copiado: $i"
        cp $i
    done
}

function ifNotExistsCreateFolders()
{
    folders=("$@")
    for i in "${folders[@]}"
    do
        if [ ! -d $i ]; then
            echo "Creando carpeta: $i"
            mkdir $i;
        fi
    done
}

function set_environment()
{
    [ "$1" = "production" ] && echo 'Configurando entorno production' \
        && sed -i 's/local/production/' .env ;

    [ "$1" = "desarrollo" ] && echo 'Configurando entorno local' \
        && sed -i 's/production/local/' .env ;
}

files_production=(
    '.env.example .env'
    'docker-compose.yml.production docker-compose.yml'
    )

files_develop=(
    './environments/dev/.env.example ./.env'
    './environments/dev/docker-compose.yml.example ./docker-compose.yml'
    )

folders=('./nginx')

mainmenu() {
    echo -ne "
MENÚ
1) Copiar archivos de configuración y setear entorno de desarrollo
2) Copiar archivos de configuración y setear entorno de producción
0) Salir
Elige una opción:  "
    read -r ans
    case $ans in
    1)
        ifNotExistsCreateFolders "${folders[@]}";
        (copy_files "${files_develop[@]}" && set_environment 'desarrollo' );
        ;;
    2)
        #(copy_files "${files_production[@]}" && set_environment 'production' )
        echo 'No implentado aun';
        ;;
    0)
        echo "Adios.";
        exit 0;
        ;;
    *)
        echo "¡Opción incorrecta!";
        exit 1;
        ;;
    esac
}

mainmenu

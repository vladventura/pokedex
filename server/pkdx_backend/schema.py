import graphene
from graphene_django import DjangoObjectType
from pkdx_backend.models import Pokemon


class PokemonType(DjangoObjectType):
    class Meta:
        model = Pokemon
        fields = ('id', 'name', 'description')


class Query(graphene.ObjectType):
    pokemons = graphene.List(PokemonType)
    pokemon = graphene.Field(
        PokemonType,
        id=graphene.Int(),
        name=graphene.String()
    )

    # We will probably add some stuff to get specifics
    def resolve_pokemons(self, info):
        # pylint: disable=no-member
        return Pokemon.objects.all()

    def resolve_pokemon(self, info, **kwargs):
        # pylint: disable=no-member
        id = kwargs.get('id')
        name = kwargs.get('name')
        if id is not None:
            return Pokemon.objects.get(pk=id)
        if name is not None:
            return Pokemon.objects.get(name=name)
        return None


schema = graphene.Schema(query=Query)

import json
from write_json import write_json

def get_all_saves(bonusType = None):
    return ['Will Save', 'Fortitude Save', 'Reflex Save']


def add(groups, name, list):
    group = {}
    group['name'] = name
    group['affixes'] = list
    groups.append(group)


def build_affix_groups():
    groups = []

    parrying = get_all_saves()
    parrying.append('Armor Class')

    add(groups, 'Resistance', get_all_saves())
    add(groups, 'Parrying', parrying)
    add(groups, 'Sheltering', ['Physical Sheltering', 'Magical Sheltering'])
    add(groups, 'Potency', ['Nullification', 'Radiance', 'Devotion', 'Corrosion', 'Combustion', 'Magnetic', 'Glaciation', 'Reconstruction', 'Impulse', 'Resonance'])

    write_json(groups, 'affix-groups')

    
if __name__ == "__main__":
    build_affix_groups()